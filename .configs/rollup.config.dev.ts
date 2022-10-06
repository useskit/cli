import { nodeResolve } from '@rollup/plugin-node-resolve'
import ts from '@rollup/plugin-typescript';
import pkg from '../package.json'

const _banner = `#!/usr/bin/env node
/**
 *  UsesKit Js v${pkg.version}  Author: ${pkg.author}
 * Website: https://www.useskit.com
 * Email:   useskit@gmail.com
 * Released under the MIT license
 */
`

export default [
  {
    input: './src/index.ts',
    output: {
      dir: 'dist',
      format: 'cjs',
      banner: _banner,
      sourcemap: true,
    },
    plugins: [
      nodeResolve({
        resolveOnly: (module) => {
          const isLocal =
            (pkg?.dependencies?.[module] === undefined || pkg?.dependencies?.[module] === null) &&
            (pkg?.devDependencies?.[module] === undefined ||
              pkg?.devDependencies?.[module] === null);

          return isLocal;
        },
      }),
      ts({ tsconfig: 'tsconfig.json' }),
    ],
  },
  {
    input: './src/index.ts',
    output: [
      {
        format: 'cjs',
        file: 'dist/cjs/index.js',
        banner: _banner,
        sourcemap: true,
      },
      {
        format: 'esm',
        file: 'dist/esm/index.js',
        banner: _banner,
        sourcemap: true,
      },
    ],
    plugins: [
      nodeResolve({
        resolveOnly: (module) => {
          const isLocal =
            (pkg?.dependencies?.[module] === undefined || pkg?.dependencies?.[module] === null) &&
            (pkg?.devDependencies?.[module] === undefined ||
              pkg?.devDependencies?.[module] === null);

          return isLocal;
        },
      }),
      ts({ tsconfig: 'tsconfig.json' }),
    ],
  },
];
