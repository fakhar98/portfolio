export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    proxy: {
      '/api': 'http://localhost:4000',
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
