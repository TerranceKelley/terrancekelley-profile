// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Terrance Kelley - AI Platform Engineer · DevOps · Multi-Cloud',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'AI Platform Engineer, DevOps Leader, Multi-Cloud Infrastructure Architect. Bear Cognition. Open to roles. Longs, SC.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Terrance Kelley - AI Platform Engineer · DevOps · Multi-Cloud' },
        { property: 'og:description', content: 'AI Platform Engineer, DevOps Leader, Multi-Cloud Infrastructure Architect. Open to new roles and collaboration.' },
        { property: 'og:url', content: 'https://www.terrancekelley.com' },
        { property: 'og:image', content: 'https://www.terrancekelley.com/headshot.png' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Terrance Kelley - AI Platform Engineer · DevOps · Multi-Cloud' },
        { name: 'twitter:description', content: 'AI Platform Engineer, DevOps Leader, Multi-Cloud Infrastructure Architect. Open to new roles.' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})


