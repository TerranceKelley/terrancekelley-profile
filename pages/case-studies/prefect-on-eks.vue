<template>
  <div class="min-h-screen bg-void-950">
    <header class="sticky top-0 z-50 bg-void-950/95 backdrop-blur-xl border-b border-neon-cyan/20">
      <nav class="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <div class="text-xl font-display font-bold tracking-tight">
          <NuxtLink to="/#projects" class="text-white hover:text-neon-cyan transition-colors text-glow-cyan">Terrance Kelley</NuxtLink>
        </div>
        <div class="flex gap-3 items-center">
          <NuxtLink to="/#projects" class="px-4 py-2 text-sm font-medium border border-neon-cyan/50 text-neon-cyan rounded hover:shadow-neon-cyan-sm transition-all">
            ← Back
          </NuxtLink>
          <a href="mailto:contact@terrancekelley.com" class="px-4 py-2 text-sm font-medium bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50 rounded hover:shadow-neon-cyan-sm transition-all">
            Contact
          </a>
        </div>
      </nav>
    </header>

    <section class="container mx-auto px-4 py-14 md:py-20">
      <h1 class="font-display text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight text-glow-cyan">
        Self-hosted Prefect on AWS (EKS) with Terraform
      </h1>
      <p class="text-slate-400 max-w-3xl mb-10">
        Sanitized case study: production-style, self-managed Prefect environment deployed on AWS with modular Terraform + Kubernetes tooling.
      </p>

      <div class="grid gap-6 lg:grid-cols-3">
        <div class="lg:col-span-2 bg-void-800/60 rounded-lg p-6 border border-slate-700/80">
          <h2 class="font-display text-xl font-semibold text-white mb-3">What I built</h2>
          <ul class="list-disc list-inside text-slate-400 space-y-2">
            <li>EKS-based platform (EC2 + optional Fargate) to run Prefect services and workers.</li>
            <li>Dedicated VPC with public/private subnetting across multiple AZs.</li>
            <li>Aurora PostgreSQL for the database and ElastiCache Redis for caching/queueing.</li>
            <li>Ingress via ingress-nginx with TLS automated by cert-manager + Let’s Encrypt.</li>
            <li>Monitoring via Prometheus + Grafana (kube-prometheus-stack style) with protected dashboards.</li>
          </ul>
        </div>

        <div class="bg-void-800/60 rounded-lg p-6 border border-slate-700/80">
          <h2 class="font-display text-xl font-semibold text-white mb-3">Stack</h2>
          <div class="flex flex-wrap gap-2">
            <span v-for="t in stack" :key="t" class="px-2.5 py-1 bg-void-700 text-slate-300 rounded border border-slate-600/50 text-xs">
              {{ t }}
            </span>
          </div>
        </div>
      </div>

      <div class="mt-6 bg-void-800/60 rounded-lg p-6 border border-slate-700/80">
        <h2 class="font-display text-xl font-semibold text-white mb-3">How it’s operated</h2>
        <ul class="list-disc list-inside text-slate-400 space-y-2">
          <li>Terraform remote state with S3 + DynamoDB locking for safe collaboration.</li>
          <li>GitHub Actions for scheduled drift detection (weekly terraform plan) and state auditing.</li>
          <li>Module separation to limit blast radius and keep changes reviewable.</li>
        </ul>
      </div>

      <div class="mt-6 bg-void-800/60 rounded-lg p-6 border border-slate-700/80">
        <h2 class="font-display text-xl font-semibold text-white mb-3">Why it matters</h2>
        <p class="text-slate-400">
          This demonstrates hands-on EKS operations, Terraform module design, secure ingress/TLS automation, and pragmatic platform reliability patterns that translate directly to production DevOps / platform roles.
        </p>
      </div>
    </section>

    <footer class="border-t border-neon-cyan/20 py-8 mt-12 bg-void-900/80">
      <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p class="text-slate-500 text-sm">&copy; {{ new Date().getFullYear() }} Terrance Kelley</p>
        <div class="flex gap-6 text-sm">
          <a href="https://www.linkedin.com/in/terrancekelley" target="_blank" rel="noopener noreferrer" class="text-slate-400 hover:text-neon-cyan transition-colors">LinkedIn</a>
          <a href="mailto:contact@terrancekelley.com" class="text-slate-400 hover:text-neon-cyan transition-colors">Email</a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Case study: Self-hosted Prefect on AWS (EKS)',
  description: 'Sanitized case study: modular Terraform + EKS (EC2/Fargate), Aurora PostgreSQL, ElastiCache Redis, ingress-nginx, cert-manager/Let’s Encrypt, and Prometheus/Grafana.',
  ogTitle: 'Case study: Self-hosted Prefect on AWS (EKS)',
  ogDescription: 'Modular Terraform + EKS (EC2/Fargate), Aurora PostgreSQL, ElastiCache Redis, ingress-nginx, cert-manager/Let’s Encrypt, and Prometheus/Grafana.',
  ogType: 'article'
})

const stack = [
  'AWS',
  'EKS',
  'Terraform',
  'Kubernetes',
  'Helm',
  'Aurora PostgreSQL',
  'ElastiCache Redis',
  'ingress-nginx',
  'cert-manager',
  'Let’s Encrypt',
  'Prometheus',
  'Grafana',
  'GitHub Actions'
]
</script>

