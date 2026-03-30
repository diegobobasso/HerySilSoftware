<template>
  <div class="value-card" @mouseenter="hover = true" @mouseleave="hover = false">
    <div class="icon" :class="{ 'animate-bounce': hover }">
      <img :src="getIconPath(icon)" :alt="title + ' icon'" class="icon-img" />
    </div>
    <h3>{{ title }}</h3>
    <p>{{ description }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  icon: {
    type: String, // Nombre del archivo sin extensión (ej: "innovation-icon")
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

const hover = ref(false)

// Método para construir la ruta del icono
const getIconPath = (iconName) => {
  return new URL(`../assets/icons/${iconName}.png`, import.meta.url).href
}
</script>

<style scoped>
.value-card {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  cursor: default;
}

.value-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  background: white;
}

.icon {
  margin-bottom: 1rem;
  transition: transform 0.3s ease;
}

.icon-img {
  width: 48px;
  height: 48px;
  object-fit: contain;
}

.animate-bounce {
  animation: bounce 1s infinite;
}

@keyframes bounce {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

h3 {
  color: var(--primary);
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
}

p {
  color: #666;
  font-size: 0.95rem;
  margin: 0;
}
</style>
