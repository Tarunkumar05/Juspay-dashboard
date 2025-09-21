import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [
    react(), 
    svgr({
      svgrOptions: {
        icon: true,
      },
      include: "**/*.svg?react",
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "/src/styles/globals/variables.scss";
          @import "/src/styles/globals/mixin.scss";
          @import "/src/styles/globals/typography.scss";
        `
      }
    }
  }
})