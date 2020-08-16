import babel from "rollup-plugin-babel";
import rpt from '@rollup/plugin-typescript';

export default  [
    {
        input: "src/packages/index.ts",
        output: {
            name: "kk-tools-umd",
            file: "dist/kk-tools-umd.js",
            format: "umd",
        },
        plugins: [
            babel({
                exclude:  "node_modules/**",
            }),
            rpt(),
        ],
  },
    {
        input: "src/packages/index.ts",
        output: {
            file: "dist/kk-tools.js",
            format: "es",
        },
        plugins: [
            babel({
                exclude:  "node_modules/**", 
            }),
            rpt(),
        ],
    }
]
