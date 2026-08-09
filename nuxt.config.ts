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
        { name: 'description', content: 'AWS-first AI Platform Engineer and DevOps leader. I automate infrastructure, harden platforms, and accelerate delivery with Terraform, Kubernetes/EKS, CI/CD, and observability.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Terrance Kelley - AI Platform Engineer · DevOps · Multi-Cloud' },
        { property: 'og:description', content: 'AWS-first AI Platform / DevOps engineer and leader. Terraform, EKS, CI/CD automation, observability, and pragmatic security.' },
        { property: 'og:url', content: 'https://www.terrancekelley.com' },
        { property: 'og:image', content: 'https://www.terrancekelley.com/headshot.png' },
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: 'Terrance Kelley - AI Platform Engineer · DevOps · Multi-Cloud' },
        { name: 'twitter:description', content: 'AWS-first AI Platform / DevOps engineer and leader. Terraform, EKS, CI/CD automation, observability.' },
        { name: 'twitter:image', content: 'https://www.terrancekelley.com/headshot.png' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    }
  }
})

