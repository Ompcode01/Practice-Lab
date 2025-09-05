<template>
  <div class="analytics-page">
    <Header />
    
    <main class="main-content">
      <div class="container">
        <div class="page-header">
          <h1>Analytics</h1>
          <p>Detailed analytics and reporting</p>
        </div>
        
        <div class="analytics-grid">
          <div class="chart-card">
            <h3>User Activity</h3>
            <div class="chart-placeholder">
              <div class="chart-icon">📈</div>
              <p>Chart visualization coming soon</p>
            </div>
          </div>
          
          <div class="chart-card">
            <h3>Content Performance</h3>
            <div class="chart-placeholder">
              <div class="chart-icon">📊</div>
              <p>Performance metrics</p>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    <Footer />
  </div>
</template>

<script setup>
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.analytics-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 2rem 0;
  background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
  color: white;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
}

.page-header p {
  font-size: 1.1rem;
  opacity: 0.9;
}

.analytics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.chart-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
}

.chart-card h3 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
}

.chart-placeholder {
  text-align: center;
  padding: 3rem;
  color: #7f8c8d;
}

.chart-icon {
  font-size: 4rem;
  margin-bottom: 1rem;
}
</style>