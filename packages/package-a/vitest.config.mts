import { defineConfig } from 'vitest/config'

// biome-ignore lint/style/noDefaultExport: vite expects default export
export default defineConfig({
  test: {
    watch: false,
    restoreMocks: true,
    environment: 'node',
    include: ['src/**/*.test.ts'],
    exclude: [],
  },
})
