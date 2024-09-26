// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  // ssr: false,
  // typescript: {
  //   shim: false,
  // },
  app: {
    head: {
        meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
       // title: "ROSETECH - TA DITT FÖRETAG TILL NÄSTA NIVÅ",
        script: []
    }
},

 
  build: {
    transpile: ["vuetify"],
  },
  ssr: true,
  typescript: {
    strict: false
  },
  // nitro: {
  //   serveStatic: true,
  //   preset: "cloudflare-pages"
  // },
  // sourcemap: { server: false, client: false },
  // devServerHandlers: [],

 // modules: ["@sidebase/nuxt-auth", "@nuxtjs/tailwindcss" , 'nuxt-resend'],
  modules: ["@sidebase/nuxt-auth", "@nuxtjs/tailwindcss" , 'nuxt-resend'],
  nitro: {
    preset: 'cloudflare-pages'
  },
})