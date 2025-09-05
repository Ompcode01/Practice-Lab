<template>
  <div class="settings-page">
    <Header />
    
    <main class="main-content">
      <div class="container">
        <div class="page-header">
          <h1>Settings</h1>
          <p>Configure your practice lab settings</p>
        </div>
        
        <div class="settings-grid">
          <div class="settings-card">
            <div class="settings-icon">👤</div>
            <h3>Profile Settings</h3>
            <p>Manage your account information and preferences</p>
            <button class="settings-btn">Configure</button>
          </div>
          
          <div class="settings-card">
            <div class="settings-icon">🔔</div>
            <h3>Notifications</h3>
            <p>Control email and push notification preferences</p>
            <button class="settings-btn">Manage</button>
          </div>
          
          <div class="settings-card">
            <div class="settings-icon">🎨</div>
            <h3>Appearance</h3>
            <p>Customize the look and feel of your dashboard</p>
            <button class="settings-btn">Customize</button>
          </div>
          
          <div class="settings-card">
            <div class="settings-icon">🔒</div>
            <h3>Security</h3>
            <p>Password and two-factor authentication settings</p>
            <button class="settings-btn">Secure</button>
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
.settings-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 2rem 0;
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
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

.settings-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.settings-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  text-align: center;
  transition: transform 0.3s ease;
  backdrop-filter: blur(10px);
}

.settings-card:hover {
  transform: translateY(-5px);
}

.settings-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.settings-card h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.settings-card p {
  color: #7f8c8d;
  margin-bottom: 1.5rem;
}

.settings-btn {
  background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.settings-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(79, 172, 254, 0.4);
}
</style>