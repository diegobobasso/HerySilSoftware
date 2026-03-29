<template>
  <div class="service-card">
    <div class="service-icon">{{ icon }}</div>
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <span class="check-icon">✓</span>{{ item }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
    validator: (value) => value.every((item) => typeof item === 'string'),
  },
})
</script>

<style scoped>
.service-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
}

.service-icon {
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: var(--primary);
}

h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--primary);
  position: relative;
  padding-bottom: 0.5rem;
}

h3::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50px;
  height: 3px;
  background: var(--accent);
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #f0f0f0;
  color: #555;
  position: relative;
  padding-left: 1.5rem;
}

.check-icon {
  color: var(--accent);
  position: absolute;
  left: 0;
  font-weight: bold;
}
</style>
