import { defineConfig } from 'vite'

export default defineConfig({
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
      entry: 'src/style.ts',
      formats: ['umd', 'cjs', 'es'],
      name: 'uiDesign',
    },
  },
})
