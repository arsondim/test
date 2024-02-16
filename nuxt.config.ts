// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  //css: ["~/assets/css/main.css"],

  runtimeConfig :{
    apiKey: process.env.API_KEY
  },
  app:{
    head:{
      title: 'Example Page',
      meta:[
        {name: 'Description', content: 'Content'}
      ],
      link: [
        {
          rel:'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Icons'
        }
      ]
    }

  },

  modules: ["@nuxt/ui", "@nuxtjs/tailwindcss", "@nuxtjs/color-mode"],
  tailwindcss: {
   cssPath: "~/assets/css/main.css",
   configPath: 'tailwind.config.js',
  },
});
