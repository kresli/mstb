import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import babel from "rollup-plugin-babel";
import pkg from "./package.json";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
  input: "./src/index.ts",
  external: ["mobx-state-tree", "mobx"],
  plugins: [
    resolve({ extensions, preferBuiltins: true }),
    babel({ extensions, include: ["src/**/*"] }),
    commonjs()
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
      globals: {
        mobx: "mobx",
        "mobx-state-tree": "mobx-state-tree"
      }
    }
  ],
  // let's ignore circular dependencies, we have them because we using single
  // internal.ts file
  onwarn(warning, warn) {
    if (warning.code !== "CIRCULAR_DEPENDENCY") {
      warn(warning);
    }
  }
};
