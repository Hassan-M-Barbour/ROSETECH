// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  nitro: {
    preset: "cloudflare-pages",
    experimental:{
      database:true,

    },
    database:{
      myDatabase: {
        connector:"cloudflare-d1",
        options:{
          bindingName : "dbRoseTech"
        }
      }
    }
  },

  css: [
    'swiper/css',
    'swiper/css/navigation',
    'swiper/css/pagination',
    "public/css/bootstrap.min.css",
    "public/css/style.css",
     "public/css/styleAr.css"
],
  
  app: {
    head: {
        meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
       // title: "ROSETECH - TA DITT FÖRETAG TILL NÄSTA NIVÅ",
        script: []
    }
},

 
 
  
  
  modules: ["@nuxtjs/tailwindcss", 'nuxt-resend', '@nuxtjs/color-mode', "nuxt-gtag",'@sidebase/nuxt-auth'],
 
  typescript: {
    shim: false
  },
  auth: {
    isEnabled: true,
    baseURL: process.env.AUTH_ORIGIN,
    provider: {
      type: 'authjs'
    },
    globalAppMiddleware: {
      isEnabled: true
    }
  },
  build: {
    transpile: ["vuetify"],
  },
 
  gtag: {
    id: 'G-J9F6ZT1H5X'
  } ,
    

})