<template>
  <div class="contact-method" :class="type">
    <div class="method-icon">
      <img :src="getIconPath(icon)" :alt="type + ' icon'" class="icon-img" />
    </div>
    <div class="method-content">
      <h3>{{ type === 'email' ? 'Email' : 'WhatsApp' }}</h3>
      <a
        :href="type === 'email' ? `mailto:${value}` : `https://wa.me/${cleanWhatsappNumber}`"
        target="_blank"
        rel="noopener noreferrer"
        class="method-link"
      >
        {{ formattedValue }}
      </a>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  type: {
    type: String,
    required: true,
    validator: (value) => ['email', 'whatsapp'].includes(value),
  },
  icon: {
    type: String, // Nombre del archivo sin extensión (ej: "email-icon")
    required: true,
  },
  value: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
})

const formattedValue = computed(() => {
  if (props.type === 'whatsapp') {
    // Formato: +54 351 1234567
    return props.value.replace(/(\+\d{2})(\d{3})(\d{7})/, '$1 $2 $3')
  }
  return props.value
})

const cleanWhatsappNumber = computed(() => {
  // Elimina caracteres no numéricos excepto el +
  return props.value.replace(/[^\d+]/g, '')
})

// Método para construir la ruta del icono
const getIconPath = (iconName) => {
  return new URL(`../assets/icons/${iconName}.png`, import.meta.url).href
}
</script>

<style scoped>
.contact-method {
  display: flex;
  gap: 1.5rem;
  align-items: flex-start;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 12px;
  transition: all 0.3s ease;
}

.contact-method:hover {
  transform: translateX(5px);
  background: #e9ecef;
}

.method-icon {
  flex-shrink: 0;
  margin-top: 0.25rem;
}

.icon-img {
  width: 28px;
  height: 28px;
  object-fit: contain;
}

.method-content {
  flex: 1;
}

h3 {
  margin: 0 0 0.5rem 0;
  color: var(--primary);
  font-size: 1.2rem;
}

.method-link {
  display: inline-block;
  color: var(--dark);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s ease;
  margin-bottom: 0.25rem;
}

.whatsapp .method-link {
  color: #25d366;
}

.whatsapp .method-link:hover {
  color: #128c7e;
}

.email .method-link:hover {
  color: var(--accent);
}

p {
  margin: 0.25rem 0 0 0;
  color: #666;
  font-size: 0.9rem;
}
</style>
