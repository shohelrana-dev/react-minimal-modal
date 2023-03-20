const typescript = require('@rollup/plugin-typescript');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const postcss = require('rollup-plugin-postcss')
const autoprefixer = require('autoprefixer')
const pkg = require('./package.json');
const {babel} = require('@rollup/plugin-babel');


module.exports = {
    input: 'src/index.ts',
    output: [
        {
            dir: 'dist',
            format: 'cjs',
            exports: "named"
        },
    ],
    external: [...Object.keys(pkg.dependencies || {})],
    plugins: [
        babel({
            include: 'src/**',
            presets: ["@babel/preset-react", "@babel/preset-env"],
            babelHelpers: "bundled"
        }),
        typescript({
            typescript: require('typescript'),
            tsconfig: './tsconfig.json'
        }),
        resolve(),
        commonjs(),
        postcss({
            plugins: [autoprefixer()],
            minimize: true,
            modules: true,
            extract: false,
            inject: {
                insertAt: 'top'
            },
        })
    ],
};