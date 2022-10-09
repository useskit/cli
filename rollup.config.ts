import banner from 'rollup-plugin-banner'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import pkg from './package.json'

const _banner = `UsesKit Js v${pkg.version}  Author: <%= pkg.author %>\nWebsite: <%= pkg.homepage %>\nEmail:   useskit@gmail.com\nReleased under the MIT license`
export default [
  {
    input: './src/cli.ts',
    output: [{
      format: 'cjs',
      strict: true,
      file: './dist/cli.js',
    }],
    plugins: [
      typescript(),
      nodeResolve({
        resolveOnly: (module) => {
          const isLocal
          = (pkg?.dependencies?.[module] === undefined || pkg?.dependencies?.[module] === null)
          && (pkg?.devDependencies?.[module] === undefined
            || pkg?.devDependencies?.[module] === null)

          return isLocal
        },
      }),
      banner(_banner)],
  },
]
