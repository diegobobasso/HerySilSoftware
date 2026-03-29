<template>
  <div class="testimonial-card">
    <p class="message">“{{ message }}”</p>
    <h4>{{ name }}</h4>
    <span class="role">{{ role }}</span>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  role: String,
  message: String,
})
</script>

<style scoped>
.testimonial-card {
  background: #fff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.08);
  text-align: center;
}
.message {
  font-style: italic;
  margin-bottom: 1rem;
  color: #444;
}
h4 {
  margin: 0;
  color: #2a5298;
}
.role {
  font-size: 0.9rem;
  color: #777;
}
</style>
