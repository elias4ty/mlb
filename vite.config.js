import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path';

function resolve(p) {
  return path.resolve(__dirname, p);
}

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@image': resolve('./src/assets/img'),
      '@style': resolve('./src/assets/style'),
      '@font': resolve('./src/assets/font'),
      '@views': resolve('./src/views'),
      '@com': resolve('./src/components')
    }
  }
})
