// import banner from 'rollup-plugin-banner'
import { terser } from 'rollup-plugin-terser'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import pkg from './package.json'

const _banner = `#!/usr/bin/env node
/**
 *  UsesKit Js v${pkg.version}  Author: ${pkg.author}
 * Website: https://www.useskit.com
 * Email:   useskit@gmail.com
 * Released under the MIT license
 */
`

const input = './src/index.ts'
const plugins = [commonjs(), nodeResolve(), typescript()]
const pluginsMin = [commonjs(), nodeResolve(), typescript(), terser()]
export default [{
  input,
  output: [{
    format: 'cjs',
    strict: true,
    file: './dist/index.js',
    banner: _banner,
  }],
  plugins,
}, {
  input,
  output: [{
    format: 'cjs',
    strict: true,
    file: './dist/index.min.js',
    banner: _banner,
  }],
  plugins: pluginsMin,
}]
