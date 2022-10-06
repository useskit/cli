import { nodeResolve } from '@rollup/plugin-node-resolve'
import pkg from '../package.json'
import ts from '@rollup/plugin-typescript';


export default [
  {
    input: 'src/index.ts',
    output: {
      dir: 'dist',
      format: 'cjs',
      banner: '#!/usr/bin/env node',
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
      ts({ tsconfig: 'tsconfig.prod.json' }),
    ],
  },
  {
    input: 'src/index.ts',
    output: [
      {
        format: 'cjs',
        file: 'dist/cjs/index.js',
        sourcemap: true,
      },
      {
        format: 'esm',
        file: 'dist/esm/index.js',
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
      ts({ tsconfig: 'tsconfig.prod.json' }),
    ],
  },
];