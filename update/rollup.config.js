// Based on https://github.com/lofcz/umd-react

import { readFileSync, rmSync, mkdirSync, writeFileSync } from "fs";
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

// Determine React version
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pkg = JSON.parse(readFileSync("./node_modules/react/package.json"));
const version = pkg.version;

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

async function generateEntryFile(tempDir) {
  const entryContent = `
        import * as ReactDOM from 'react-dom';
        import * as ReactDOMClient from 'react-dom/client';

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
  writeFileSync(entryFile, entryContent);
  return entryFile;
}

const reactPlugin = {
  name: "react-copy",
  async buildStart() {
    try {
      const tempDir = path.join(__dirname, "temp");

      rmSync(tempDir, { recursive: true, force: true });
      mkdirSync(tempDir, { recursive: true });

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

      await runWebpack({
        ...commonConfig,
        entry: "react/jsx-runtime",
        output: {
          path: tempDir,
          filename: "jsx-runtime.min.js",
          library: {
            name: "JsxRuntime",
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

      // 1. build files
      await runWebpack({
        ...commonConfig,
        entry: "react",
        output: {
          path: tempDir,
          filename: "react.min.js",
          library: {
            name: "React",
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

      // react 19 added "ReactDomClient" which we need to merge back into "ReactDom"
      const entryFile = await generateEntryFile(tempDir);
      await runWebpack({
        ...commonConfig,
        entry: entryFile,
        externals: {
          react: {
            root: "React", // <global>.React
            commonjs: "react", // require('react')
            commonjs2: "react", // require('react')
            amd: "react", // define(['react'], ...)
          },
        },
        output: {
          path: tempDir,
          filename: "react-dom.min.js",
          library: {
            name: "ReactDOM",
            type: "umd",
            umdNamedDefine: true,
            export: undefined,
          },
          globalObject: "this",
          iife: true,
        },
        plugins: [
          new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify("production"),
          }),
        ],
      });

      // 2. copy built umd files into lib
      const jsxRuntimeContent = readFileSync(
        path.join(tempDir, "jsx-runtime.min.js"),
        "utf8",
      );
      const reactContent = readFileSync(
        path.join(tempDir, "react.min.js"),
        "utf8",
      );
      const reactDomContent = readFileSync(
        path.join(tempDir, "react-dom.min.js"),
        "utf8",
      );

      this.emitFile({
        type: "asset",
        fileName: "jsx-runtime.min.js",
        source: `/*! jsx-runtime.min.js v${version} */\n${jsxRuntimeContent}`,
      });

      this.emitFile({
        type: "asset",
        fileName: "react.min.js",
        source: `/*! react.min.js v${version} */\n${reactContent}`,
      });

      this.emitFile({
        type: "asset",
        fileName: "react-dom.min.js",
        source: `/*! react-dom.min.js v${version} */\n${reactDomContent}`,
      });

      rmSync(tempDir, { recursive: true, force: true });
    } catch (error) {
      console.error("Error during build:", error);
      throw error;
    }
  },
};

export default {
  input: "virtual",
  output: {
    dir: "dist",
  },
  plugins: [
    {
      name: "virtual",
      resolveId(id) {
        if (id === "virtual") return id;
      },
      load(id) {
        if (id === "virtual") return "export default {}";
      },
    },
    reactPlugin,
  ],
};
