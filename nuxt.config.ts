// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content'],
  vite: {
    optimizeDeps: {
      include: [
        '@vue/devtools-core',
        '@vue/devtools-kit',
      ]
    }
  },

  // ------------------------------------------------------------------
  // Stuff AI has recommended below!
  //-------------------------------------------------------------------

  components: {
    dirs: [] // Keep this empty; I am not auto importing components because I want to be very clear.
  },
})
