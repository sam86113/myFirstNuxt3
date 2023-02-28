// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'myFistNuxt3App',
      link: [{ rel: 'icon', type: 'image/png', href: '_nuxt/assets/img/waterfall.jpg' }],
      meta: [{ name: 'description', content: 'a waterfall wrriten by tailwind' }]
    }
  },
  plugins: [{ src: '@/plugins/aos', ssr: false, mode: 'client' }],
  modules: ['@nuxtjs/tailwindcss'],
  typescript: {
    typeCheck: true
  },
  css: ['~/assets/sass/main.scss'],
  vite: {
    server: {
      watch: {
        usePolling: true //set here to enable hot reload
      }
    }
  }
})
