const siteUrl = `http://localhost:3000`;

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
    '@nuxt/fonts',
    '@nuxt/image',
    '@vueuse/nuxt',
    '@nuxtjs/robots',
  ],

  /* SSG __ pregenerate all pages at build time */
  routeRules: {
    '/**': { prerender: true },
  },

  /* prevent pages from being indexed by search engines */
  site: { indexable: false },

  runtimeConfig: {
    public: {
      siteUrl,
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
