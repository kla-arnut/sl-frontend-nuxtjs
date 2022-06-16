import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    vite: {
        server: {
            host: "0.0.0.0",
            port: 3000,
            strictPort: true,
            hmr: {
                host: 'slproject.com',
                port: 443,
                protocol: 'wss'
            },
        }
    }
})
