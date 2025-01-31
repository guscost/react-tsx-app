// Based on https://github.com/lofcz/umd-react
import fs, {
  appendFileSync,
  copyFileSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
} from "fs";
import path from "path";
import { Readable } from "stream";
import { finished } from "stream/promises";
import { fileURLToPath } from "url";
import webpack from "webpack";

// Get keys to load from react-dom and react-dom/client
import * as ReactDOMClient from "react-dom/client";
import * as ReactDOM from "react-dom";

const reactDomClientMethods = Object.keys(ReactDOMClient).filter(
  (key) => key !== "default",
);
const reactDomMethods = Object.keys(ReactDOM).filter(
  (key) => key !== "default" && !reactDomClientMethods.includes(key),
);

// Common Webpack config
const commonConfig = {
  mode: "production",
  optimization: {
    minimize: true,
    usedExports: true,
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-react"],
          },
        },
      },
    ],
  },
};

// Determine package versions
const _root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const reactVersion = JSON.parse(
  readFileSync(path.join(_root, "update/node_modules/react/package.json")),
).version;
const radixVersion = JSON.parse(
  readFileSync(path.join(_root, "update/node_modules/radix-ui/package.json")),
).version;
const lucideVersion = JSON.parse(
  readFileSync(
    path.join(_root, "update/node_modules/lucide-react/package.json"),
  ),
).version;
const packageVersions = {
  react: reactVersion,
  "react-dom": reactVersion,
  "jsx-runtime": reactVersion,
  "lucide-react": lucideVersion,
  "radix-ui": radixVersion,
};

// Helper methods for building UMD bundles
async function generateReactDomEntryFile(tempDir) {
  const entryContent = `
        import * as ReactDOM from "react-dom";
        import * as ReactDOMClient from "react-dom/client";

        // export client methods
        ${reactDomClientMethods
          .map((method) => `export const ${method} = ReactDOMClient.${method};`)
          .join("\n")}

        // export dom methods
        ${reactDomMethods
          .map((method) => `export const ${method} = ReactDOM.${method};`)
          .join("\n")}
    `;

  const entryFile = path.join(tempDir, "react-dom-entry.js");
  appendFileSync(entryFile, entryContent);
  return entryFile;
}

async function runWebpack(config) {
  return new Promise((resolve, reject) => {
    webpack(config, (err, stats) => {
      if (err) {
        reject(err);
        return;
      }
      if (stats.hasErrors()) {
        reject(new Error(stats.toString()));
        return;
      }
      resolve(stats);
    });
  });
}

async function buildUmd(tempDir, moduleName, fileName, entry, externals) {
  await runWebpack({
    ...commonConfig,
    entry: entry || moduleName,
    externals: externals || {},
    output: {
      path: tempDir,
      filename: fileName,
      library: {
        name: moduleName,
        type: "umd",
        umdNamedDefine: true,
      },
      globalObject: "this",
      iife: true,
      environment: {
        arrowFunction: true,
        const: true,
      },
    },
    plugins: [
      new webpack.DefinePlugin({
        "process.env.NODE_ENV": JSON.stringify("production"),
      }),
    ],
  });

  const content = readFileSync(path.join(tempDir, fileName), "utf8");
  const version = packageVersions[fileName.split(".")[0]];

  appendFileSync(
    path.join(_root, "www/js/lib", fileName),
    content.replace(/^\/\*\!.*\*\//, `/*! ${fileName} v${version} */`) + "\n",
  );
}

// Build all UMD bundles for the project
async function buildUmds() {
  try {
    const tempDir = path.join(_root, "update/temp");
    rmSync(tempDir, { recursive: true, force: true });
    mkdirSync(tempDir, { recursive: true });

    // 1. Clean up old files
    rmSync(path.join(_root, "www/js/lib/tailwind.min.js"), { force: true });
    rmSync(path.join(_root, "www/js/lib/react.min.js"), { force: true });
    rmSync(path.join(_root, "www/js/lib/react-dom.min.js"), {
      force: true,
    });
    rmSync(path.join(_root, "www/js/lib/lucide-react.min.js"), {
      force: true,
    });
    rmSync(path.join(_root, "www/js/lib/radix-ui.min.js"), { force: true });

    // 2. Copy Tailwind from CDN
    const tailwindResponse = await fetch(
      "https://cdn.tailwindcss.com/?plugins=forms,typography,aspect-ratio,container-queries",
    );
    const tailwindFileStream = fs.createWriteStream(
      path.join(_root, "www/js/lib/tailwind.min.js"),
      { flags: "wx" },
    );
    await finished(
      Readable.fromWeb(tailwindResponse.body).pipe(tailwindFileStream),
    );

    // 3. Build React and other dependencies
    await buildUmd(tempDir, "react", "react.min.js");
    await buildUmd(tempDir, "react/jsx-runtime", "react.min.js");

    // React 19 added react-dom/client which we need to merge back into react-dom
    await buildUmd(
      tempDir,
      "react-dom",
      "react-dom.min.js",
      await generateReactDomEntryFile(tempDir),
      {
        react: {
          root: "React",
          commonjs: "react",
          commonjs2: "react",
          amd: "react",
        },
      },
    );

    // Lucide icons
    await buildUmd(tempDir, "lucide-react", "lucide-react.min.js");

    // Aggregate all Radix UI modules into one big file
    const radixUiSources = readdirSync(
      path.join(_root, "update/node_modules/@radix-ui"),
      {
        withFileTypes: true,
      },
    );
    for (const folder of radixUiSources.filter((f) => f.isDirectory())) {
      await buildUmd(
        tempDir,
        `@radix-ui/${folder.name}`,
        "radix-ui.min.js",
        null,
        {
          react: {
            root: "React",
            commonjs: "react",
            commonjs2: "react",
            amd: "react",
          },
          "react-dom": {
            root: "ReactDOM",
            commonjs: "react-dom",
            commonjs2: "react-dom",
            amd: "react-dom",
          },
        },
      );
    }

    // Build shadcn deps
    await buildUmd(tempDir, "clsx", "shadcn.min.js");
    await buildUmd(tempDir, "tailwind-merge", "shadcn.min.js");
    await buildUmd(tempDir, "class-variance-authority", "shadcn.min.js");
    await buildUmd(tempDir, "cmdk", "shadcn.min.js");
    await buildUmd(tempDir, "react-day-picker", "shadcn.min.js");
    await buildUmd(tempDir, "react-resizable-panels", "shadcn.min.js");

    rmSync(tempDir, { recursive: true, force: true });
  } catch (error) {
    console.error("Error during UMD build:", error);
    throw error;
  }
}

// Copy all type definitions for the project
async function copyTypes() {
  try {
    rmSync(path.join(_root, "types"), { recursive: true, force: true });
    mkdirSync(path.join(_root, "types"), { recursive: true });

    // csstype
    copyFileSync(
      path.join(_root, "update/node_modules/csstype/index.d.ts"),
      path.join(_root, "types/csstype.d.ts"),
    );

    // react is a relative import in jsx-runtime, so rewrite that
    copyFileSync(
      path.join(_root, "update/node_modules/@types/react/global.d.ts"),
      path.join(_root, "types/global.d.ts"),
    );
    copyFileSync(
      path.join(_root, "update/node_modules/@types/react/index.d.ts"),
      path.join(_root, "types/react.d.ts"),
    );
    const jsxRuntimeContent = readFileSync(
      path.join(_root, "update/node_modules/@types/react/jsx-runtime.d.ts"),
      "utf8",
    );
    appendFileSync(
      path.join(_root, "types/jsx-runtime.d.ts"),
      jsxRuntimeContent.replace(
        /((import|export).* from )"\.\/";/g,
        (_, g) => g + '"react";',
      ),
    );

    // react-dom has types from both index and client, since we built them together
    const reactDomContent = readFileSync(
      path.join(_root, "update/node_modules/@types/react-dom/index.d.ts"),
      "utf8",
    );
    const reactDomClientContent = readFileSync(
      path.join(_root, "update/node_modules/@types/react-dom/client.d.ts"),
      "utf8",
    );
    appendFileSync(
      path.join(_root, "types/react-dom.d.ts"),
      reactDomContent + "\n",
    );
    appendFileSync(
      path.join(_root, "types/react-dom.d.ts"),
      reactDomClientContent,
    );

    // Copy lucide-react types
    copyFileSync(
      path.join(
        _root,
        "update/node_modules/lucide-react/dist/lucide-react.d.ts",
      ),
      path.join(_root, "types/lucide-react.d.ts"),
    );

    // Copy all radix-ui types
    rmSync(path.join(_root, "types/@radix-ui"), {
      recursive: true,
      force: true,
    });
    mkdirSync(path.join(_root, "types/@radix-ui"));

    const radixUiFolders = readdirSync(
      path.join(_root, "update/node_modules/@radix-ui"),
      {
        withFileTypes: true,
      },
    );
    for (const folder of radixUiFolders.filter((f) => f.isDirectory())) {
      const radixUiTypedefs = readdirSync(
        path.join(_root, "update/node_modules/@radix-ui", folder.name, "dist"),
        {
          withFileTypes: true,
        },
      );

      for (const file of radixUiTypedefs.filter(
        (f) => f.isFile() && f.name.endsWith(".d.ts"),
      )) {
        copyFileSync(
          path.join(folder.parentPath, folder.name, "dist", file.name),
          "index.d.ts" === file.name
            ? path.join(_root, "types/@radix-ui", `${folder.name}.d.ts`)
            : path.join(_root, "types/@radix-ui", file.name),
        );
      }
    }

    // Copy shadcn dependency types
    copyFileSync(
      path.join(_root, "update/node_modules/clsx/clsx.d.ts"),
      path.join(_root, "types/clsx.d.ts"),
    );
    copyFileSync(
      path.join(_root, "update/node_modules/tailwind-merge/dist/types.d.ts"),
      path.join(_root, "types/tailwind-merge.d.ts"),
    );
    copyFileSync(
      path.join(_root, "update/node_modules/cmdk/dist/index.d.ts"),
      path.join(_root, "types/cmdk.d.ts"),
    );
    appendFileSync(
      path.join(_root, "types/react-day-picker.d.ts"),
      'declare module "react-day-picker";',
    );
    appendFileSync(
      path.join(_root, "types/react-resizable-panels.d.ts"),
      'declare module "react-resizable-panels";',
    );

    const classVarianceAuthorityContent = readFileSync(
      path.join(
        _root,
        "update/node_modules/class-variance-authority/dist/index.d.ts",
      ),
      "utf8",
    );
    const classVarianceAuthorityTypesContent = readFileSync(
      path.join(
        _root,
        "update/node_modules/class-variance-authority/dist/types.d.ts",
      ),
      "utf8",
    );
    appendFileSync(
      path.join(_root, "types/class-variance-authority.d.ts"),
      classVarianceAuthorityContent.replace(
        /import .* from "\.\/types";/,
        classVarianceAuthorityTypesContent,
      ) + "\n",
    );
  } catch (error) {
    console.error("Error during typedef build:", error);
    throw error;
  }
}

buildUmds();
copyTypes();
