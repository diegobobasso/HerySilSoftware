import { createApp } from 'vue'
import { createHead } from '@vueuse/head' // Importa createHead
import App from './App.vue'
import router from './router'

const app = createApp(App)
const head = createHead() // Crea la instancia de head

app.use(router)
app.use(head) // Registra el plugin en Vue
app.mount('#app')
