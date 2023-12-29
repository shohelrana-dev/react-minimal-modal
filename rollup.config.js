const typescript = require('@rollup/plugin-typescript');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const postcss = require('rollup-plugin-postcss')
const autoprefixer = require('autoprefixer')
const pkg = require('./package.json');
const {babel} = require('@rollup/plugin-babel');
const { terser } = require( 'rollup-plugin-terser');


module.exports = {
    input: 'src/index.ts',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
        },
        {
            file: 'dist/index.es.js',
            format: 'es',
            exports: 'named'
        },
    ],
    external: [...Object.keys(pkg.dependencies || {})],
    plugins: [
        babel({
            exclude: 'node_modules/**',
            presets: ["@babel/preset-react", "@babel/preset-env"],
            babelHelpers: "bundled"
        }),
        typescript({
            typescript: require('typescript'),
            tsconfig: './tsconfig.json'
        }),
        resolve(),
        commonjs(),
        terser(),
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
