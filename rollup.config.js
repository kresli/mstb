import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";
import builtins from "rollup-plugin-node-builtins";
import json from "rollup-plugin-json";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
  input: "./src/index.ts",

  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en#external-e-external
  external: ["mobx-state-tree", "mobx"],

  plugins: [
    // Allows node_modules resolution
    resolve({ extensions, preferBuiltins: true }),
    builtins({ crypto: true }),
    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),
    json(),

    // Compile TypeScript/JavaScript files
    babel({ extensions, include: ["src/**/*"] })
  ],

  output: [
    {
      file: pkg.main,
      format: "cjs"
    },
    {
      file: pkg.module,
      format: "esm",
      globals: {
        mobx: "mobx"
      }
    },
    {
      file: pkg.browser,
      format: "umd",
      name: "mstb",

      // https://rollupjs.org/guide/en#output-globals-g-globals
      globals: {
        mobx: "mobx",
        "mobx-state-tree": "mobx-state-tree"
      }
    }
  ],
  onwarn(warning, warn) {
    if (warning.code !== "CIRCULAR_DEPENDENCY") {
      // this sends the warning back to Rollup's internal warning handler
      warn(warning);
    }
  }
};
