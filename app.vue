<template>
  <div class="min-h-screen bg-void-950 text-slate-200">
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
if (import.meta.client) {
  document.documentElement.classList.add('dark')
}
</script>


