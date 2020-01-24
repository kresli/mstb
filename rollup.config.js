import typescript from 'rollup-plugin-typescript2'
import pkg from './package.json'
export default {
  input: 'src/index.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
    },
    {
      file: pkg.module,
      format: 'es',
    },
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],plugins: [
    typescript({
      typescript: require('typescript'),
    }),
  ],
  onwarn(warning, warn) {
    if (warning.code !== "CIRCULAR_DEPENDENCY") {
      warn(warning);
    }
  }
}

// import commonjs from "rollup-plugin-commonjs";
// import resolve from "rollup-plugin-node-resolve";
// import babel from "rollup-plugin-babel";
// import pkg from "./package.json";

// const extensions = [".js", ".jsx", ".ts", ".tsx"];

// export default {
//   input: "./src/index.ts",
//   external: ["mobx-state-tree", "mobx", "uuid"],
//   plugins: [
//     resolve({ extensions, preferBuiltins: true }),
//     babel({ extensions, include: ["src/**/*"] }),
//     commonjs()
//   ],
//   output: [
//     {
//       file: pkg.main,
//       format: "cjs"
//     },
//     {
//       file: pkg.module,
//       format: "esm",
//       globals: {
//         mobx: "mobx"
//       }
//     }
//   ],
//   // let's ignore circular dependencies, we have them because we using single
//   // internal.ts file
//   onwarn(warning, warn) {
//     if (warning.code !== "CIRCULAR_DEPENDENCY") {
//       warn(warning);
//     }
//   }
// };
