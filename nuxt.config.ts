// Clean Nuxt config for Windows compatibility
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/ionic',
  ],

  ssr: true,

  components: [
    { path: '~/components', pathPrefix: false },
  ],

  css: [
    '@unocss/reset/tailwind.css',
    '~/styles/css-vars.scss',
    '~/styles/index.scss',
  ],

  experimental: {
    payloadExtraction: false,
    renderJsonPayloads: true,
  },

  compatibilityDate: '2025-05-15',

  nitro: {
    prerender: {
      crawlLinks: false,
      routes: ['/', '/random', '/help', '/user', '/404', '/settings'],
    },
  },
})