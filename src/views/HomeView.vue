<template>
  <div class="herysil-app">
    <!-- Header/Hero Section -->
    <header class="hero">
      <div class="container">
        <div class="hero-content">
          <img
            src="@/assets/images/logoHerysil1.png"
            alt="HerySil Logo"
            class="logo"
            width="180"
            height="180"
          />
          <div class="hero-text">
            <h1>HerySil Software Development</h1>
            <p class="tagline">Desarrollo de soluciones tecnológicas innovadoras</p>
            <p class="description">
              Transformamos ideas en realidad digital con código limpio, diseño innovador y las
              mejores prácticas de desarrollo.
            </p>
          </div>
        </div>
      </div>
    </header>

    <!-- Main Content -->
    <main>
      <!-- About Section -->
      <section class="about">
        <div class="container">
          <h2 class="section-title">¿Quiénes somos?</h2>
          <div class="about-content">
            <p>
              En <strong>HerySil Software Development</strong> estamos dando nuestros primeros pasos
              en el mundo del desarrollo de sistemas. Somos una empresa joven, con la energía y la
              pasión de un equipo que busca crecer y aprender en cada proyecto.
            </p>
            <p>
              Nuestro compromiso es acompañar a negocios y emprendedores en su transformación
              digital, ofreciendo soluciones accesibles, modernas y escalables. Creemos que la
              innovación y la cercanía con nuestros clientes son la base para construir relaciones
              duraderas y proyectos exitosos.
            </p>

            <div class="values-grid">
              <ValueCard
                v-for="value in values"
                :key="value.title"
                :icon="value.icon"
                :title="value.title"
                :description="value.description"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Services Section -->
      <section class="services">
        <div class="container">
          <h2 class="section-title">Nuestros Servicios</h2>
          <div class="services-grid">
            <ServiceCard
              v-for="service in services"
              :key="service.title"
              :icon="service.icon"
              :title="service.title"
              :items="service.items"
            />
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="contact">
        <div class="container">
          <h2 class="section-title">Contáctanos</h2>
          <div class="contact-grid">
            <ContactMethod
              v-for="method in contactMethods"
              :key="method.type"
              :type="method.type"
              :icon="method.icon"
              :value="method.value"
              :description="method.description"
            />
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import ValueCard from '@/components/ValueCard.vue'
import ServiceCard from '@/components/ServiceCard.vue'
import ContactMethod from '@/components/ContactMethod.vue'

// Datos reactivos
const values = ref([
  {
    icon: '💡',
    title: 'Innovación',
    description: 'Implementamos las últimas tecnologías y metodologías',
  },
  {
    icon: '🎯',
    title: 'Enfoque',
    description: 'Soluciones específicas para tus necesidades',
  },
  {
    icon: '⚡',
    title: 'Eficiencia',
    description: 'Desarrollo ágil y entrega oportuna',
  },
  {
    icon: '🤝',
    title: 'Compromiso',
    description: 'Acompañamiento continuo y soporte post-entrega',
  },
])

const services = ref([
  {
    icon: '🌐',
    title: 'Desarrollo Web',
    items: [
      'Aplicaciones web personalizadas',
      'Landing pages y sitios corporativos',
      'E-commerce y tiendas online',
      'Dashboards y paneles administrativos',
    ],
  },
  {
    icon: '🔧',
    title: 'Soluciones Empresariales',
    items: [
      'Sistemas de gestión interna',
      'Automatización de procesos',
      'Migración y modernización de sistemas',
      'Consultoría tecnológica',
    ],
  },
  {
    icon: '🛠️',
    title: 'Mantenimiento & Soporte',
    items: [
      'Mantenimiento preventivo y correctivo',
      'Actualización de tecnologías',
      'Optimización de performance',
      'Soporte técnico continuo',
    ],
  },
])

const contactMethods = ref([
  {
    type: 'email',
    icon: '📧',
    value: 'herysilsoftwaredevelopment@gmail.com',
    description: 'Respondemos en menos de 24 horas',
  },
  {
    type: 'whatsapp',
    icon: '💬',
    value: '+54 351 2458186',
    description: 'Chat directo con nuestro equipo',
  },
])
</script>

<style>
/* Variables CSS */
:root {
  --primary: #405ecc;
  --secondary: #4d505b;
  --accent: #e74c3c;
  --dark: #2c3e50;
  --light: #ecf0f1;
  --gray: #7f8c8d;
}

/* Reset y estilos base */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  line-height: 1.6;
  color: var(--dark);
  background-color: #f9f9f9;
}

.herysil-app {
  width: 100%;
  min-height: 100vh;
}

.container {
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Estilos del Hero */
.hero {
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  padding: 4rem 0;
  text-align: center;
}

.hero-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

.logo {
  border-radius: 50%;
  object-fit: contain;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.hero-text h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  background: linear-gradient(135deg, #ffffff 0%, #e0f7fa 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 800;
}

.tagline {
  font-size: 1.25rem;
  color: var(--light);
  margin-bottom: 1rem;
  font-weight: 300;
}

.description {
  font-size: 1.1rem;
  color: var(--light);
  opacity: 0.9;
}

/* Estilos de secciones */
section {
  padding: 4rem 0;
}

.section-title {
  text-align: center;
  font-size: 3rem;
  margin-bottom: 3rem;
  color: var(--dark);
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  width: 80px;
  height: 4px;
  background: var(--accent);
  bottom: -15px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 2px;
}

/* Estilos específicos de secciones */
.about {
  background-color: white;
}

.about-content {
  max-width: 1200px;
  margin: 0 auto;
}

.about-content p {
  font-size: 1.2rem;
  text-align: justify;
  margin-bottom: 1.5rem;
  color: var(--dark);
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.values-grid p {
  font-size: 1rem;
  text-align: left;
}

.services {
  background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.contact {
  background-color: white;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Responsive */
@media (max-width: 768px) {
  .hero-text h1 {
    font-size: 2rem;
  }

  .section-title {
    font-size: 1.75rem;
  }

  .values-grid,
  .services-grid,
  .contact-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 3rem 0;
  }

  .logo {
    width: 120px;
    height: 120px;
  }

  .hero-text h1 {
    font-size: 1.75rem;
  }

  .tagline {
    font-size: 1.1rem;
  }

  section {
    padding: 3rem 0;
  }
}
</style>
