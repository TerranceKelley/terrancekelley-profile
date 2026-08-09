<template>
  <div class="min-h-screen bg-void-950">
    <!-- Header -->
    <header class="sticky top-0 z-50 bg-void-950/95 backdrop-blur-xl border-b border-neon-cyan/20">
      <nav class="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <div class="text-xl font-display font-bold tracking-tight">
          <NuxtLink to="/" class="text-white hover:text-neon-cyan transition-colors text-glow-cyan">Terrance Kelley</NuxtLink>
        </div>
        <div class="hidden md:flex gap-8">
          <NuxtLink to="#about" class="text-slate-400 hover:text-neon-cyan transition-colors font-medium">About</NuxtLink>
          <NuxtLink to="#skills" class="text-slate-400 hover:text-neon-cyan transition-colors font-medium">Skills</NuxtLink>
          <NuxtLink to="#experience" class="text-slate-400 hover:text-neon-cyan transition-colors font-medium">Experience</NuxtLink>
          <NuxtLink to="#projects" class="text-slate-400 hover:text-neon-cyan transition-colors font-medium">Projects</NuxtLink>
          <NuxtLink to="#contact" class="text-slate-400 hover:text-neon-cyan transition-colors font-medium">Contact</NuxtLink>
        </div>
        <a href="#contact" class="md:hidden px-4 py-2 text-sm font-medium bg-neon-cyan/20 text-neon-cyan border border-neon-cyan/50 rounded hover:shadow-neon-cyan-sm transition-all">Contact</a>
      </nav>
    </header>

    <!-- Hero Section -->
    <section class="relative overflow-hidden tron-grid tron-hero-overlay min-h-[80vh] flex flex-col justify-center">
      <div class="container relative mx-auto px-4 py-20 md:py-28 text-center">
        <img src="/headshot.png" alt="Terrance Kelley" class="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover mx-auto mb-6 ring-2 ring-neon-cyan/50 shadow-neon-cyan-sm animate-fade-in-up" />
        <h1 class="font-display text-4xl md:text-6xl font-bold text-white mb-3 tracking-tight animate-fade-in-up opacity-0 animate-delay-100 text-glow-cyan" style="animation-fill-mode: forwards;">
          Terrance Kelley
        </h1>
        <p class="text-lg md:text-xl text-neon-cyan/90 mb-1 animate-fade-in-up opacity-0 animate-delay-200 font-medium" style="animation-fill-mode: forwards;">
          AI Platform Engineer · DevOps Leader · Multi-Cloud Infrastructure Architect
        </p>
        <p class="text-slate-500 text-sm mb-6 animate-fade-in-up opacity-0 animate-delay-300" style="animation-fill-mode: forwards;">Longs, South Carolina</p>
        <p class="max-w-xl mx-auto text-slate-400 text-base mb-8 animate-fade-in-up opacity-0 animate-delay-400" style="animation-fill-mode: forwards;">
          I automate infrastructure and lead DevOps teams so delivery is faster, more reliable, and scalable.
        </p>
        <div class="flex gap-3 justify-center flex-wrap animate-fade-in-up opacity-0 animate-delay-500" style="animation-fill-mode: forwards;">
          <a href="#contact" class="px-5 py-2.5 bg-neon-cyan/20 text-neon-cyan border border-neon-cyan rounded font-medium text-sm hover:shadow-neon-cyan hover:bg-neon-cyan/30 transition-all duration-200">
            Get in touch
          </a>
          <a href="https://www.linkedin.com/in/terrancekelley" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 border-2 border-neon-cyan/60 text-neon-cyan rounded hover:bg-neon-cyan/20 hover:shadow-neon-cyan-sm transition-all text-sm font-medium">
            LinkedIn
          </a>
          <a href="#projects" class="px-5 py-2.5 border-2 border-slate-500 text-slate-400 rounded hover:border-neon-cyan/50 hover:text-neon-cyan transition-all text-sm font-medium">
            Projects
          </a>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section id="skills" class="container mx-auto px-4 py-16 md:py-20 border-t border-neon-cyan/10">
      <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-8 text-center tracking-tight text-glow-cyan">
        Technologies & Skills
      </h2>
      <p class="text-slate-400 text-center max-w-2xl mx-auto mb-10">
        Multi-cloud (GCP, AWS), serverless, data platforms, CI/CD, and AI/LLM integrations—tools and platforms I use to ship and operate at scale.
      </p>
      <div class="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
        <span v-for="(skill, i) in skills" :key="skill" class="px-3 py-1.5 bg-void-800/80 text-slate-300 rounded border border-slate-600/50 hover:border-neon-cyan/60 hover:text-neon-cyan hover:shadow-neon-cyan-sm transition-all duration-200 cursor-default text-sm font-medium">
          {{ skill }}
        </span>
      </div>
    </section>

    <!-- About Section -->
    <section id="about" class="bg-void-900/50 py-16 md:py-20 border-t border-neon-cyan/10 tron-grid-dense">
      <div class="container mx-auto px-4">
        <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-8 text-center tracking-tight text-glow-cyan">
          About
        </h2>
        <div class="max-w-3xl mx-auto">
          <p class="text-lg text-slate-300 mb-4">
            I am an IT professional with over 23 years of experience, specializing in automating infrastructure, streamlining operations, and driving continuous improvement. My focus is on leveraging DevOps strategies to accelerate deployment processes, enhance cross-team collaboration, and deliver scalable solutions that improve efficiency and performance. I have successfully led teams through complex migrations, implemented CI/CD pipelines, and developed automation that dramatically reduces delivery times.
          </p>
          <p class="text-lg text-slate-300 mb-4">
            My background spans cloud infrastructure management, automation, and iterative feedback loops, all while maintaining a sharp focus on cost optimization, security, and scalability. I'm passionate about solving complex problems and transforming the way organizations deliver software, always looking for new ways to innovate and improve.
          </p>
          <p class="text-lg text-slate-300">
            <strong class="text-neon-cyan">Open to new roles and collaboration.</strong> Full experience and recommendations on <a href="https://www.linkedin.com/in/terrancekelley" target="_blank" rel="noopener noreferrer" class="text-neon-cyan font-medium underline hover:no-underline hover:text-neon-blue">LinkedIn</a>—reach out anytime.
          </p>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section id="experience" class="container mx-auto px-4 py-16 md:py-20 border-t border-neon-cyan/10">
      <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-10 text-center tracking-tight text-glow-cyan">
        Experience
      </h2>
      <div class="max-w-3xl mx-auto space-y-6">
        <div v-for="job in experience" :key="job.id" class="group bg-void-800/60 rounded-lg p-6 border border-slate-700/80 border-l-4 border-l-neon-cyan hover:border-neon-cyan/60 hover:shadow-neon-cyan-sm transition-all duration-200">
          <div class="flex flex-wrap items-baseline justify-between gap-2 mb-2">
            <h3 class="text-xl font-display font-semibold text-white">{{ job.title }}</h3>
            <span class="text-sm text-slate-500">{{ job.dates }}</span>
          </div>
          <p class="text-neon-cyan/80 font-medium mb-2">{{ job.company }} · {{ job.location }}</p>
          <p v-if="job.description" class="text-slate-400 text-sm mb-3">{{ job.description }}</p>
          <ul v-if="job.successes?.length" class="list-disc list-inside text-sm text-slate-500 space-y-1">
            <li v-for="(s, i) in job.successes" :key="i">{{ s }}</li>
          </ul>
        </div>
      </div>
      <p class="text-center mt-10">
        <a href="https://www.linkedin.com/in/terrancekelley" target="_blank" rel="noopener noreferrer" class="text-neon-cyan font-medium underline hover:no-underline hover:text-neon-blue">Full experience & skills on LinkedIn →</a>
      </p>
    </section>

    <!-- Projects Section -->
    <section id="projects" class="bg-void-900/50 py-16 md:py-20 border-t border-neon-cyan/10 tron-grid-dense">
      <div class="container mx-auto px-4">
        <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-6 text-center tracking-tight text-glow-cyan">
          Projects
        </h2>
      <p class="text-slate-400 text-center max-w-2xl mx-auto mb-10">
        Selected work—what I built, why, and with what.
        </p>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div v-for="project in projects" :key="project.id" class="group bg-void-800/60 rounded-lg p-6 border border-slate-700/80 hover:border-neon-cyan/50 hover:shadow-neon-cyan-sm transition-all duration-200">
            <h3 class="text-xl font-display font-semibold text-white mb-2 group-hover:text-neon-cyan transition-colors">{{ project.title }}</h3>
          <p class="text-slate-400 text-sm mb-4">{{ project.description }}</p>
          <div class="flex gap-2 flex-wrap mb-4">
            <span v-for="tech in project.tech" :key="tech" class="px-2.5 py-1 bg-void-700 text-slate-400 rounded border border-slate-600/50 text-xs">
              {{ tech }}
            </span>
          </div>
          <div v-if="project.url || project.repo" class="flex gap-4">
            <a v-if="project.url" :href="project.url" target="_blank" rel="noopener noreferrer" class="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:text-white underline">Live</a>
            <a v-if="project.repo" :href="project.repo" target="_blank" rel="noopener noreferrer" class="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:text-white underline">Code</a>
          </div>
        </div>
      </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="container mx-auto px-4 py-16 md:py-20 border-t border-neon-cyan/10">
      <h2 class="font-display text-3xl md:text-4xl font-bold text-white mb-6 text-center tracking-tight text-glow-cyan">
        Get in touch
      </h2>
      <p class="text-slate-400 text-center max-w-md mx-auto mb-10">
        Open to new roles and collaboration. Reach out—I respond quickly.
      </p>
      <div class="flex flex-wrap gap-3 justify-center">
        <a href="https://www.linkedin.com/in/terrancekelley" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 bg-[#0A66C2] text-white rounded border border-[#0A66C2] hover:opacity-90 transition-opacity text-sm font-medium">
          LinkedIn
        </a>
        <a href="mailto:contact@terrancekelley.com" class="px-5 py-2.5 bg-neon-cyan/20 text-neon-cyan border border-neon-cyan rounded font-medium text-sm hover:shadow-neon-cyan hover:bg-neon-cyan/30 transition-all">
          Email
        </a>
        <a href="https://www.linkedin.com/in/terrancekelley" target="_blank" rel="noopener noreferrer" class="px-5 py-2.5 border-2 border-neon-cyan/50 text-neon-cyan rounded hover:bg-neon-cyan/10 hover:shadow-neon-cyan-sm transition-all text-sm font-medium">
          Resume / full profile →
        </a>
      </div>
    </section>

    <!-- Footer -->
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
const experience = ref([
  {
    id: 1,
    title: 'Senior Cloud/DevOps Engineer',
    company: 'Bear Cognition, Inc.',
    dates: 'Jun 2025 – Present · 10 mos',
    location: 'Charleston, SC · Hybrid',
    description: 'Full-stack cloud and platform engineering across GCP and AWS: serverless (Cloud Run, Lambda), APIs (API Gateway, Route 53), load balancing, and cross-account and cross-cloud management. Building and maintaining data pipelines and stores (Firestore, MongoDB, Snowflake) and CI/CD with GitHub Actions, Doppler for secrets, and Prefect for orchestration. Full-stack delivery with Nuxt, Python, and TypeScript; analytics and dashboards with Dash and Sigma. Integrating LLMs and AI services (Bedrock, Textract, Whisper, ElevenLabs and others) to add efficiency to project deployments and to full-stack cloud delivery—automating and streamlining how we ship and operate.',
    successes: [] as string[]
  },
  {
    id: 2,
    title: 'DevOps Manager',
    company: 'OneNeck IT Solutions',
    dates: 'Oct 2023 – Sep 2024 · 1 yr',
    location: 'Full-time',
    description: 'Developed and executed strategies to streamline operations, enhance dev/ops collaboration, and drive automation. Led and mentored DevOps teams with a focus on CI/CD pipelines, cloud provisioning, and performance monitoring. Worked cross-functionally with development, QA, and operations; prioritized security compliance, disaster recovery, cost optimization, and continuous feedback loops.',
    successes: [
      'Reduced customer-managed server delivery from 2 weeks to 1 hour or less through automation',
      'Led cloud hypervisor automation, cutting deployment times by 50%',
      'Managed migration from VMware to Nutanix AHV, two months ahead of schedule',
      'Collaborated with cross-functional teams to deliver projects faster and more efficiently'
    ]
  },
  {
    id: 3,
    title: 'DevOps Team Lead',
    company: 'OneNeck IT Solutions',
    dates: 'Jul 2017 – Oct 2023 · 6 yrs 4 mos',
    location: 'Remote',
    description: 'Guided the team in automation strategies for infrastructure, deployment, and operational efficiency. Fostered collaboration between development and operations; oversaw cloud infrastructure, deployment pipelines, and process improvements. Mentored junior team members.',
    successes: [
      'Automated infrastructure processes, reducing server delivery from 2 weeks to 1 hour or less',
      'Implemented cloud hypervisor automation, reducing deployment times by 50%',
      'Spearheaded migration from VMware to Nutanix AHV, completed two months ahead of schedule',
      'Improved deployment efficiency via CI/CD and Python-based automation',
      'Mentored and developed junior engineers'
    ]
  },
  {
    id: 4,
    title: 'Service Engineer II - DevOps',
    company: 'OneNeck IT Solutions',
    dates: 'May 2017 – Jul 2017 · 3 mos',
    location: 'Remote',
    description: '',
    successes: [] as string[]
  },
  {
    id: 5,
    title: 'Senior Developer',
    company: 'OneNeck IT Solutions',
    dates: 'Apr 2012 – May 2017 · 5 yrs 2 mos',
    location: 'Hybrid',
    description: '',
    successes: [] as string[]
  },
  {
    id: 6,
    title: 'Solutions Developer',
    company: 'OneNeck IT Solutions',
    dates: 'Oct 2009 – Apr 2012 · 2 yrs 7 mos',
    location: 'On-site',
    description: '',
    successes: [] as string[]
  },
  {
    id: 7,
    title: 'Network Engineer - VoIP / Developer',
    company: 'OneNeck IT Solutions',
    dates: 'Jun 2005 – Oct 2009 · 4 yrs 5 mos',
    location: 'On-site',
    description: '',
    successes: [] as string[]
  },
  {
    id: 8,
    title: 'Network Engineer / Developer',
    company: 'OneNeck IT Solutions',
    dates: 'Apr 2001 – Jun 2005 · 4 yrs 3 mos',
    location: 'On-site',
    description: '',
    successes: [] as string[]
  }
])

const projects = ref([
  {
    id: 1,
    title: 'Breakitdown',
    description: 'AI-powered idea breakdown and project management. Turn rough ideas into structured tasks and timelines.',
    tech: ['Nuxt 3', 'TypeScript', 'OpenAI', 'Tailwind CSS'],
    url: 'https://breakitdown.kloudtastic.com',
    repo: ''
  },
  {
    id: 2,
    title: 'Project 2',
    description: 'Description of your second project',
    tech: ['Tech 1', 'Tech 2'],
    url: '',
    repo: ''
  },
  {
    id: 3,
    title: 'Project 3',
    description: 'Description of your third project',
    tech: ['Tech 1', 'Tech 2'],
    url: '',
    repo: ''
  }
])

const skills = ref([
  'GCP', 'AWS', 'Azure', 'Cloud Run', 'Lambda', 'API Gateway', 'Route 53',
  'Firestore', 'MongoDB', 'Snowflake', 'Load Balancing', 'Cross-Account', 'Cross-Cloud',
  'Terraform', 'Ansible', 'GitHub', 'GitHub Actions', 'Doppler', 'Prefect',
  'Nuxt', 'Python', 'TypeScript', 'Dash', 'LLMs', 'Bedrock', 'Textract', 'Whisper', 'ElevenLabs',
  'Sigma', 'Docker', 'Kubernetes', 'CI/CD', 'Linux', 'Microservices',
  'Grafana', 'Elasticsearch', 'MySQL', 'SQL', 'REST', 'Full-Stack',
  'Agile', 'DevOps', 'Solution Architecture', 'Technical Leadership'
])
</script>


