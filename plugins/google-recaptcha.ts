import { VueReCaptcha } from 'vue-recaptcha-v3';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(VueReCaptcha, {
        
        siteKey: '6LdEoxUqAAAAAFrXnd6EH85l07uOECeBejpqUciY',
    });

    console.log('applied')
});