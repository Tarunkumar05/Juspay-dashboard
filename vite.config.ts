// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'
// import svgr from 'vite-plugin-svgr'
// import path from 'path'

// export default defineConfig({
//   plugins: [
//     react(), 
//     svgr({
//       svgrOptions: {
//         exportType: 'default',
//       },
//     })
//   ],
//   resolve: {
//     alias: {
//       '@': path.resolve(__dirname, './src'),
//     },
//   },
//   css: {
//     preprocessorOptions: {
//       scss: {
//         additionalData: `
//           @import "@/styles/globals/variables.scss";
//           @import "@/styles/globals/mixin.scss";
//           @import "@/styles/globals/typography.scss";
//         `
//       }
//     }
//   }
// })

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportType: 'default',
      svgrOptions: {
        exportType: 'default',
      },
    }),
  ],
  build: {
    rollupOptions: {
      external: [],
    },
  },
})
