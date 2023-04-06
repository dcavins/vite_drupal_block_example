import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  base: "/modules/custom/vite_drupal_block_example/dist/", // @TODO: Can this be not hardcoded, in case the site admin puts this module somewhere besides `/custom`?
  build: {
    // output dir for production build
    outDir: path.resolve(__dirname, '../dist'),
    emptyOutDir: true,

    // emit manifest so PHP can find the hashed files
    manifest: true,

    // esbuild target
    target: 'es2018',

    // our entry
    rollupOptions: {
      input: './src/main.js'
    }
  },
  // required for in-browser template compilation
  // https://v3.vuejs.org/guide/installation.html#with-a-bundler
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm-bundler.js',
      '@': path.resolve(__dirname, 'src')
    }
  }
})
