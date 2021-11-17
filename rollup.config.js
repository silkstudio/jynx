import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'

/*








*/

const configBase = {
  input: 'src/index.ts',
  external: id => !/^[./]/.test(id)
}

const configDev = {
  ...configBase,
  output: [
    {
      file: `dist/styled-framework.cjs.js`,
      format: 'cjs',
      sourcemap: true
    },
    {
      file: `dist/styled-framework.js`,
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [esbuild()]
}

const configProd = {
  ...configDev,
  output: [
    {
      file: 'dist/styled-framework.cjs.min.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/styled-framework.min.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [esbuild({ minify: true })]
}

const configTS = {
  ...configBase,
  output: {
    file: 'dist/index.d.ts',
    format: 'es'
  },
  plugins: [dts()]
}

export default [configDev, configTS]
