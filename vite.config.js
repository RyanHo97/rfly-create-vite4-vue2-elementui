import { defineConfig } from 'vite'
import legacy from '@vitejs/plugin-legacy'
import { createVuePlugin } from 'vite-plugin-vue2'
import path from 'path'

const HOST = '0.0.0.0'
const REPLACEMENT = path.resolve(__dirname, './src')

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
    optimizeDeps: {
      include: ['axios'],
    },
    build: {
      cssCodeSplit: true,
      minify: true,
      rollupOptions: {
        output: {
          manualChunks: {
            'axios': ['axios'],
            'vendor': ['vue', 'vue-router', 'vuex', 'element-ui'],
          },
        },
        // 将 node_modules 中的模块单独打包到 vendor chunk 中
        plugins: [require('rollup-plugin-commonjs')({
          include: /node_modules/,
          namedExports: {
            'node_modules/lodash/lodash.js': ['cloneDeep']
          }
        })],
      },
    },
  })
}