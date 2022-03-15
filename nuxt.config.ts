import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  ssr: false,
  target: 'static',
  vite: {
    optimizeDeps: {
      exclude: ['date-fns'],
      include: ['cookie'],
    },
  },
  publicRuntimeConfig: {
    ApibaseUrl: process.env.API_BASE_URL,
    ApiProtocol: process.env.NUXT_APP_API_PROTOCOL,
    ApiHost: process.env.NUXT_APP_API_HOST,
    ApiPort: process.env.NUXT_APP_API_PORT,
    ApiPath: process.env.NUXT_APP_API_PATH,
  },
  css: ['assets/styles/main.scss'],
})
