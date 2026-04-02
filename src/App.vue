<template>
  <router-view />
</template>

<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'HerySil Software Development',
  meta: [
    {
      name: 'description',
      content: 'Desarrollo de soluciones tecnológicas innovadoras...',
    },
    { name: 'author', content: 'HerySil Software Development' },
  ],
  link: [
    { rel: 'canonical', href: 'https://www.herysilsoftware.com.ar/' },
    { rel: 'icon', type: 'image/png', href: '/faviconhs.png' },
  ],
})
</script>
