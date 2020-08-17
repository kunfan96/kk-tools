import babel from "rollup-plugin-babel";
import rpt from '@rollup/plugin-typescript';

const buildTarget = [
    {
        name: "kk-tools-umd",
        file: "dist/kk-tools-umd.js",
        format: "umd",
    },
    {
        file: "dist/kk-tools.js",
        format: "es",
    }
]

const buildResult = buildTarget.map(item => {
    return {
        input: "src/packages/index.ts",
        output: item,
        plugins: [
            babel({
                exclude:  "node_modules/**",
            }),
            rpt(),
        ],
    }
})

export default  buildResult
