import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

// Create Vue application
const app = createApp(App)

// Use router
app.use(router)

// Global error handler
app.config.errorHandler = (err, vm, info) => {
  console.error('Vue Error:', err)
  console.error('Component:', vm)
  console.error('Info:', info)
}

// Global properties (if needed)
app.config.globalProperties.$formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(new Date(date))
}

// Mount the application
app.mount('#app')
