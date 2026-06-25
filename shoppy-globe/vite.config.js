import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      // Force all imports to use the same React instance
      react: path.resolve('./node_modules/react'),
    },
  },
});
