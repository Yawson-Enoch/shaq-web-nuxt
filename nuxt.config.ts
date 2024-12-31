// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/fonts',
    '@nuxt/image',
    '@vueuse/nuxt',
  ],

  /* SSG __ pregenerate all pages at build time */
  routeRules: {
    '/**': { prerender: true },
  },

  runtimeConfig: {
    public: {
      /* this gets overridden when NUXT_PUBLIC_SITE_URL env var is set */
      siteUrl: '',
    },
  },

  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: '',
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: './components/ui',
  },

  compatibilityDate: '2024-09-28',
});
