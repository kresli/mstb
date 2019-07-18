import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

const name = "mstb";

export default {
  input: "./src/index.ts",

  // Specify here external modules which you don't want to include in your bundle (for instance: 'lodash', 'moment' etc.)
  // https://rollupjs.org/guide/en#external-e-external
  external: ["uuid", "mobx-state-tree", "mobx"],

  plugins: [
    // Allows node_modules resolution
    resolve({ extensions, preferBuiltins: true }),

    // Allow bundling cjs modules. Rollup doesn't understand cjs
    commonjs(),

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
      format: "es",
      globals: {
        mobx: "mobx"
      },
      name
    },
    {
      file: pkg.browser,
      format: "iife",
      name,

      // https://rollupjs.org/guide/en#output-globals-g-globals
      globals: {
        mobx: "mobx",
        "mobx-state-tree": "mobx-state-tree",
        uuid: "uuid"
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
