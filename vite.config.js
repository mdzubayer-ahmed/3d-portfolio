import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'],

  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.jsx?$/, // Adjust path as needed
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Support .jsx files
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            // Creates a 'vendor' chunk for dependencies
            return 'vendor';
          }
        },
      },
    },
  },
  
  // Add this line for GitHub Pages deployment
  base: '/3d-portfolio/', // Replace <REPO_NAME> with your GitHub repository name
});
