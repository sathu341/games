// vite.config.js
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

import { defineConfig } from "vite"

// export default defineConfig({
//   plugins: [react()],
//   build: {
//     outDir: 'dist',
//   },
// });
export default defineConfig( {
  build: {
    rollupOptions: {
      external: ['some-external-package']
    }
  }
})
