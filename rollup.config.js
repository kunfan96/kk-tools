import babel from "rollup-plugin-babel";
import rpt from '@rollup/plugin-typescript';
import { uglify } from "rollup-plugin-uglify"

const targetOptions = [
    {
        name: "kk-tools",
        file: "lib/index.js",
        format: "cjs",
    }
]

const buildResult = targetOptions.map(target => {
    return {
        input: "src/index.ts",
        output: target,
        plugins: [
            babel({
                exclude:  "node_modules/**",
            }),
            rpt(),
            uglify(),
        ],
    }
})

export default  buildResult
