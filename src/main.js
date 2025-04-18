import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'  // Isso importa o Tailwind
import './style.css'
import { router } from './router'

createApp(App)
  .use(router)
  .mount('#app')

