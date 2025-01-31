// Based on https://github.com/lofcz/umd-react

import {
  appendFileSync,
  copyFileSync,
  mkdirSync,
  readdirSync,
  readFileSync,
  rmSync,
} from "fs";
import path from "path";
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

// Determine React version
const __dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const reactVersion = JSON.parse(
  readFileSync(path.join(__dirname, "update/node_modules/react/package.json")),
).version;
const radixVersion = JSON.parse(
  readFileSync(
    path.join(__dirname, "update/node_modules/radix-ui/package.json"),
  ),
).version;
const packageVersions = {
  "jsx-runtime": reactVersion,
  react: reactVersion,
  "react-dom": reactVersion,
  "radix-ui": radixVersion,
};

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
    path.join(__dirname, "www/js/lib", fileName),
    content.replace(/^\/\*\!.*\*\//, `/*! ${fileName} v${version} */`) + "\n",
  );
}

async function buildUmds() {
  try {
    const tempDir = path.join(__dirname, "update", "temp");
    rmSync(tempDir, { recursive: true, force: true });
    mkdirSync(tempDir, { recursive: true });

    // 1. clean up old files
    rmSync(path.join(__dirname, "www/js/lib/jsx-runtime.min.js"), {
      force: true,
    });
    rmSync(path.join(__dirname, "www/js/lib/react.min.js"), { force: true });
    rmSync(path.join(__dirname, "www/js/lib/react-dom.min.js"), {
      force: true,
    });
    rmSync(path.join(__dirname, "www/js/lib/radix-ui.min.js"), { force: true });

    // 1. build files
    await buildUmd(tempDir, "react/jsx-runtime", "jsx-runtime.min.js");
    await buildUmd(tempDir, "react", "react.min.js");

    // react 19 added "ReactDomClient" which we need to merge back into "ReactDom"
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

    // Aggregate all Radix UI modules into one big file
    const radixUiSources = readdirSync(
      path.join(__dirname, "update/node_modules/@radix-ui"),
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

    rmSync(tempDir, { recursive: true, force: true });
  } catch (error) {
    console.error("Error during UMD build:", error);
    throw error;
  }
}

async function buildTypes() {
  try {
    rmSync(path.join(__dirname, "types/@radix-ui"), {
      recursive: true,
      force: true,
    });
    mkdirSync(path.join(__dirname, "types/@radix-ui"));

    // Copy Radix type definitions
    const radixUiFolders = readdirSync(
      path.join(__dirname, "update/node_modules/@radix-ui"),
      {
        withFileTypes: true,
      },
    );
    for (const folder of radixUiFolders.filter((f) => f.isDirectory())) {
      const radixUiTypedefs = readdirSync(
        path.join(
          __dirname,
          "update/node_modules/@radix-ui",
          folder.name,
          "dist",
        ),
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
            ? path.join(__dirname, "types/@radix-ui", `${folder.name}.d.ts`)
            : path.join(__dirname, "types/@radix-ui", file.name),
        );
      }
    }
  } catch (error) {
    console.error("Error during typedef build:", error);
    throw error;
  }
}

buildUmds();
buildTypes();
