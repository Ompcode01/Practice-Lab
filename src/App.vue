<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap');

.practice-lab-admin {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%);
  min-height: 100vh;
  color: #0f172a;
  overflow-x: hidden;
  position: relative;
}

:root {
  --primary: #6366f1;
  --primary-dark: #4f46e5;
  --secondary: #8b5cf6;
  --accent: #06b6d4;
  --success: #10b981;
  --warning: #f59e0b;
  --error: #ef4444;
  --dark: #0f172a;
  --dark-light: #1e293b;
  --gray: #64748b;
  --gray-light: #94a3b8;
  --white: #ffffff;
  --surface: #f8fafc;
  --border: rgba(148, 163, 184, 0.2);
}

.background-pattern {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(circle at 25% 25%, rgba(255, 255, 255, 0.1) 0%, transparent 70%),
    radial-gradient(circle at 75% 75%, rgba(255, 255, 255, 0.05) 0%, transparent 70%);
  pointer-events: none;
  z-index: 0;
}

.container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 2rem;
  position: relative;
  z-index: 1;
}

.header {
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
}

.header::before {
  content: '';
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  width: 200px;
  height: 200px;
  background: linear-gradient(45deg, var(--primary), var(--secondary));
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.3;
  z-index: -1;
}

.header h1 {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 1rem;
  letter-spacing: -0.02em;
  text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
}

.header p {
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.85);
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.section {
  margin-bottom: 4rem;
  position: relative;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
}

.section-title {
  font-size: 2rem;
  font-weight: 700;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.section-icon {
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(20px);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  perspective: 1000px;
}

.card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.9));
  backdrop-filter: blur(20px);
  border-radius: 24px;
  padding: 2.5rem;
  cursor: pointer;
  transition: all 0.6s cubic-bezier(0.23, 1, 0.320, 1);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.1),
    0 0 0 1px rgba(255, 255, 255, 0.1) inset;
  position: relative;
  overflow: hidden;
  transform-style: preserve-3d;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.8s cubic-bezier(0.23, 1, 0.320, 1);
  z-index: 1;
}

.card::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: var(--card-gradient);
  border-radius: 24px 24px 0 0;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.card:hover {
  transform: translateY(-15px) rotateX(5deg);
  box-shadow: 
    0 35px 70px rgba(0, 0, 0, 0.2),
    0 0 0 1px rgba(255, 255, 255, 0.2) inset;
}

.card:hover::before {
  left: 100%;
}

.card:hover::after {
  opacity: 1;
}

.card:active {
  transform: translateY(-10px) rotateX(2deg);
}

.card-content {
  position: relative;
  z-index: 2;
}

.card-icon {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  font-size: 2rem;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
  position: relative;
  overflow: hidden;
}

.card-icon::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: var(--card-gradient);
  border-radius: 20px;
  z-index: -1;
}

.card-icon::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  right: 2px;
  bottom: 2px;
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.8));
  border-radius: 18px;
  z-index: -1;
  transition: all 0.3s ease;
}

.card:hover .card-icon {
  transform: scale(1.1) rotate(10deg);
}

.card:hover .card-icon::after {
  background: transparent;
}

.card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--dark);
  margin-bottom: 0.75rem;
  letter-spacing: -0.01em;
}

.card p {
  color: var(--gray);
  font-size: 1rem;
  line-height: 1.6;
  font-weight: 400;
}

.quick-actions {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
  backdrop-filter: blur(30px);
  border-radius: 32px;
  padding: 3rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.15);
  position: relative;
  overflow: hidden;
}

.quick-actions::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(from 0deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  animation: rotate 20s linear infinite;
  z-index: 0;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

.quick-actions-content {
  position: relative;
  z-index: 1;
}

.quick-actions h2 {
  text-align: center;
  font-size: 2.5rem;
  font-weight: 800;
  color: white;
  margin-bottom: 3rem;
  text-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
}

.quick-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.quick-card {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15));
  backdrop-filter: blur(20px);
  border-radius: 28px;
  padding: 3rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
}

.quick-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, var(--quick-gradient), transparent 70%);
  opacity: 0;
  transition: opacity 0.3s ease;
  border-radius: 28px;
}

.quick-card:hover {
  transform: translateY(-20px) scale(1.02);
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.2);
}

.quick-card:hover::before {
  opacity: 0.1;
}

.quick-card-icon {
  width: 100px;
  height: 100px;
  border-radius: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  font-size: 2.5rem;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
  position: relative;
  background: var(--quick-gradient);
  color: white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
}

.quick-card:hover .quick-card-icon {
  transform: scale(1.15) rotate(-5deg);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.quick-card h3 {
  font-size: 1.75rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

.quick-card p {
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.1rem;
  line-height: 1.6;
  font-weight: 300;
}

/* Card specific gradients */
.categories { --card-gradient: linear-gradient(135deg, #ff6b6b, #ee5a24); }
.subjects { --card-gradient: linear-gradient(135deg, #a55eea, #8854d0); }
.roles { --card-gradient: linear-gradient(135deg, #26de81, #20bf6b); }
.chapters { --card-gradient: linear-gradient(135deg, #45aaf2, #2d98da); }
.content { --card-gradient: linear-gradient(135deg, #fd79a8, #e84393); }
.answers { --card-gradient: linear-gradient(135deg, #00b894, #00a085); }
.llm_instructions { --card-gradient: linear-gradient(135deg, #fdcb6e, #e17055); }

.quick-content { --quick-gradient: linear-gradient(135deg, #fd79a8, #fdcb6e); }
.quick-answers { --quick-gradient: linear-gradient(135deg, #00b894, #45aaf2); }
.quick-llm { --quick-gradient: linear-gradient(135deg, #a55eea, #fd79a8); }

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 24px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  z-index: 10;
}

.loading-overlay.active {
  opacity: 1;
  pointer-events: all;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(99, 102, 241, 0.2);
  border-top: 3px solid var(--primary);
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.notification {
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: linear-gradient(135deg, var(--success), #059669);
  color: white;
  padding: 1.25rem 1.75rem;
  border-radius: 16px;
  box-shadow: 0 15px 35px rgba(16, 185, 129, 0.4);
  z-index: 1000;
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  font-weight: 500;
}

.notification-enter-active,
.notification-leave-active {
  transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
}

.notification-enter-from {
  transform: translateX(400px);
  opacity: 0;
}

.notification-leave-to {
  transform: translateX(400px);
  opacity: 0;
}

@media (max-width: 1024px) {
  .cards-container {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  }
  
  .quick-cards {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }

  .section-header {
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
  }

  .cards-container {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .card {
    padding: 2rem;
  }

  .quick-actions {
    padding: 2rem;
  }

  .quick-card {
    padding: 2rem;
  }

  .notification {
    top: 1rem;
    right: 1rem;
    left: 1rem;
  }

  .notification-enter-from {
    transform: translateY(-100px);
  }

  .notification-leave-to {
    transform: translateY(-100px);
  }
}
</style>


