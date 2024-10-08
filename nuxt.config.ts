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

 
 
  
  
  modules: [
    "@nuxtjs/tailwindcss",
    'nuxt-resend',
    '@nuxtjs/color-mode',
    "nuxt-gtag",
    "@nuxtjs/hanko"
  ],
  hanko: {
    apiURL: process.env.NUXT_PUBLIC_HANKO_API_URL,
    registerComponents: true
  },
  // security: {
    
  //    basicAuth : {
  //     exclude: ['/'],
  //     include: ['/dashboard'],
  //     name: 'test',
  //     pass: 'test',
  //     enabled: true,
  //     message: 'hello test'
  //   },
    
  // },
  
  build: {
    transpile: ["vuetify"],
  },
 
  gtag: {
    id: 'G-J9F6ZT1H5X'
  } ,
    

})