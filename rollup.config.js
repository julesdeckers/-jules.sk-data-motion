import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from '@rollup/plugin-commonjs';
import { babel } from '@rollup/plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import postcss from "rollup-plugin-postcss";
import autoprefixer from 'autoprefixer';
import cssnano from 'cssnano';
import path from 'path';
import pkg from './package.json';

const transformStyles = postcss({
    extract: path.resolve('dist/data-motion.css'),
    plugins: [autoprefixer, cssnano]
});

const input = 'src/js/data-motion.js';

export default [
    {
        input,
        output: {
            dir: 'dist',
            name: 'DataMotion',
            format: 'umd'
        },
        plugins: [
            transformStyles,
            nodeResolve(),
            commonjs(),
            babel({
                babelHelpers: 'external',
                exclude: ['node_modules/**']
            }),
            uglify()
        ]
    },
    {
        input,
        // external: Object.keys(pkg.dependencies),
        output: [
            { file: pkg.main, format: 'cjs' },
            { file: pkg.module, format: 'es' }
        ],
        plugins: [
            transformStyles,
            babel({
                babelHelpers: 'external',
                exclude: ['node_modules/**']
            }),
            uglify()
        ]
    }
];