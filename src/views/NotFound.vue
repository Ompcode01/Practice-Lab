<template>
  <div class="not-found-page">
    <Header />
    
    <main class="main-content">
      <div class="container">
        <div class="error-content">
          <div class="error-illustration">
            <div class="error-icon">🔍</div>
            <div class="error-code">404</div>
          </div>
          
          <div class="error-text">
            <h1>Page Not Found</h1>
            <p>Sorry, the page you're looking for doesn't exist or has been moved.</p>
            
            <div class="error-actions">
              <button @click="goHome" class="primary-btn">
                <span class="btn-icon">🏠</span>
                Go Home
              </button>
              <button @click="goBack" class="secondary-btn">
                <span class="btn-icon">←</span>
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    <Footer />
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const router = useRouter()

const goHome = () => {
  router.push('/admin')
}

const goBack = () => {
  router.go(-1)
}
</script>

<style scoped>
.not-found-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}

.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.error-content {
  text-align: center;
  color: white;
}

.error-illustration {
  margin-bottom: 2rem;
}

.error-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}

.error-code {
  font-size: 8rem;
  font-weight: 900;
  line-height: 1;
  margin-bottom: 1rem;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 1rem;
  backdrop-filter: blur(10px);
}

.error-text h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.error-text p {
  font-size: 1.2rem;
  opacity: 0.9;
  margin-bottom: 2rem;
}

.error-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
}

.primary-btn,
.secondary-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary-btn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  backdrop-filter: blur(10px);
}

.primary-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.secondary-btn {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
}

.secondary-btn:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}
</style>