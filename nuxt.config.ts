// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  alias: {
    // assets: "/<rootDir>/assets",
  },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  runtimeConfig: {
    public: {
      apiBase: '',
    }
  },
})
