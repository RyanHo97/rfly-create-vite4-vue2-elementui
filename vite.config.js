import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import { createVuePlugin } from 'vite-plugin-vue2'
import path from 'path'
import { terser } from 'rollup-plugin-terser'
import postcssImport from "postcss-import"
import autoprefixer from 'autoprefixer'
import viteCompression from 'vite-plugin-compression'

const HOST = '0.0.0.0';
const REPLACEMENT = path.resolve(__dirname, './src');

export default () => {
  return defineConfig({
    base: './',
    server: {
      host: HOST,
      port: process.env.PORT,
    },
    resolve: {
      alias: {
        '@': REPLACEMENT,
        'src': REPLACEMENT,
      },
    },
    plugins: [
      createVuePlugin(/* options */),
      legacy({
        targets: ['ie >= 11'],
        additionalLegacyPolyfills: ['regenerator-runtime/runtime'],
      }),
    ],
    css: {
      postcss: {
        plugins: [
          postcssImport,
          autoprefixer,
        ],
      },
    },
    optimizeDeps: {
      include: ['axios', 'element-ui', 'lodash'],
    },
    build: {
      cssCodeSplit: {
        sourcemap: true,
      },
      minify: 'terser',
      terserOptions: {
        compress: {
          unused: true,
          dead_code: true,
          passes: 3,
          drop_console: true,
          drop_debugger: true,
        },
        format: {
          comments: true,
        },
      },
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor': ['vue','vue-router','vuex','axios'],
            'element-ui': ['element-ui'],
          },
        },
        plugins: [
          require('rollup-plugin-commonjs')({
            include: /node_modules/,
            namedExports: {
              'node_modules/lodash/lodash.js': ['cloneDeep'],
            },
          }),
          terser(),
          viteCompression({
            verbose: true,
            algorithm: 'gzip',
            ext: '.gz',
            threshold: 10240,
            deleteOriginFile: false,
            disable: false,
          }),
        ],
      },
    },
  });
};