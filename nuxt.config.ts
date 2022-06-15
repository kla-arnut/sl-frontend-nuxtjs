import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    vite: {
        server: {
            port: 443,
            https: true,
            hmr: {
                protocol: 'wss'
            }
        }
    }
})
