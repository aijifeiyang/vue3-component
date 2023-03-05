import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
export default defineConfig({
  plugins: [vueJsx(), vue()],
  build: {
    outDir: 'dist',
    emptyOutDir: false,
    minify: true,
    rollupOptions: {
      external: [
        'vue',
        '@frank/utils',
      ],
      output: {
        exports: 'named',
        globals: {
          'vue': 'Vue',
          '@frank/utils': 'frankUtils',
        },
      },
    },
    lib: {
      entry: 'src/index.ts',
      formats: ['umd', 'cjs', 'es'],
      name: 'uiDesign',
    },
  },
})
