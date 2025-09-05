<template>
  <footer class="app-footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-section">
          <div class="footer-logo">
            <div class="logo">
              <div class="logo-icon">🧪</div>
              <span class="logo-text">Practice Lab</span>
            </div>
            <p class="footer-description">
              Advanced practice management platform designed to streamline educational workflows 
              and enhance learning experiences through intelligent automation.
            </p>
            <div class="social-links">
              <a href="#" class="social-link" @click.prevent="handleSocialClick('twitter')">
                <span class="social-icon">🐦</span>
              </a>
              <a href="#" class="social-link" @click.prevent="handleSocialClick('github')">
                <span class="social-icon">🐙</span>
              </a>
              <a href="#" class="social-link" @click.prevent="handleSocialClick('linkedin')">
                <span class="social-icon">💼</span>
              </a>
              <a href="#" class="social-link" @click.prevent="handleSocialClick('discord')">
                <span class="social-icon">💬</span>
              </a>
            </div>
          </div>
        </div>

        <div class="footer-section">
          <h3 class="section-title">Platform</h3>
          <ul class="footer-links">
            <li><router-link to="/admin" class="footer-link">Administration</router-link></li>
            <li><router-link to="/dashboard" class="footer-link">Dashboard</router-link></li>
            <li><router-link to="/content" class="footer-link">Content Management</router-link></li>
            <li><router-link to="/analytics" class="footer-link">Analytics</router-link></li>
            <li><router-link to="/settings" class="footer-link">Settings</router-link></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3 class="section-title">Resources</h3>
          <ul class="footer-links">
            <li><a href="#" class="footer-link" @click.prevent="handleLinkClick('documentation')">Documentation</a></li>
            <li><a href="#" class="footer-link" @click.prevent="handleLinkClick('api')">API Reference</a></li>
            <li><a href="#" class="footer-link" @click.prevent="handleLinkClick('tutorials')">Tutorials</a></li>
            <li><a href="#" class="footer-link" @click.prevent="handleLinkClick('community')">Community</a></li>
            <li><a href="#" class="footer-link" @click.prevent="handleLinkClick('changelog')">Changelog</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3 class="section-title">Support</h3>
          <ul class="footer-links">
            <li><a href="#" class="footer-link" @click.prevent="handleLinkClick('help')">Help Center</a></li>
            <li><a href="#" class="footer-link" @click.prevent="handleLinkClick('contact')">Contact Us</a></li>
            <li><a href="#" class="footer-link" @click.prevent="handleLinkClick('status')">System Status</a></li>
            <li><a href="#" class="footer-link" @click.prevent="handleLinkClick('feedback')">Feedback</a></li>
            <li><a href="#" class="footer-link" @click.prevent="handleLinkClick('bug-report')">Report Bug</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3 class="section-title">Legal</h3>
          <ul class="footer-links">
            <li><a href="#" class="footer-link" @click.prevent="handleLinkClick('privacy')">Privacy Policy</a></li>
            <li><a href="#" class="footer-link" @click.prevent="handleLinkClick('terms')">Terms of Service</a></li>
            <li><a href="#" class="footer-link" @click.prevent="handleLinkClick('cookies')">Cookie Policy</a></li>
            <li><a href="#" class="footer-link" @click.prevent="handleLinkClick('compliance')">Compliance</a></li>
          </ul>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="footer-bottom-content">
          <div class="copyright">
            <span>&copy; {{ currentYear }} Practice Lab. All rights reserved.</span>
          </div>
          <div class="footer-meta">
            <span class="version">v{{ version }}</span>
            <span class="separator">•</span>
            <span class="build">Build {{ buildNumber }}</span>
            <span class="separator">•</span>
            <span class="status" :class="statusClass">
              <span class="status-dot"></span>
              {{ systemStatus }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

// Reactive state
const version = ref('2.1.0')
const buildNumber = ref('20240315.1')
const systemStatus = ref('All Systems Operational')
const statusType = ref('healthy') // healthy, warning, error

// Computed
const currentYear = computed(() => new Date().getFullYear())
const statusClass = computed(() => `status-${statusType.value}`)

// Methods
const handleSocialClick = (platform) => {
  console.log(`Opening ${platform}`)
  // Add actual social media links here
}

const handleLinkClick = (section) => {
  console.log(`Navigate to ${section}`)
  // Add actual navigation logic here
}

const checkSystemStatus = async () => {
  try {
    // Simulate system status check
    const statuses = [
      { status: 'All Systems Operational', type: 'healthy' },
      { status: 'Minor Issues Detected', type: 'warning' },
      { status: 'System Maintenance', type: 'warning' }
    ]
    
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)]
    systemStatus.value = randomStatus.status
    statusType.value = randomStatus.type
  } catch (error) {
    systemStatus.value = 'Status Unknown'
    statusType.value = 'error'
  }
}

// Lifecycle
onMounted(() => {
  checkSystemStatus()
  // Check status every 5 minutes
  setInterval(checkSystemStatus, 300000)
})
</script>

<style scoped>
.app-footer {
  background: linear-gradient(135deg, #2c3e50 0%, #34495e 50%, #2c3e50 100%);
  color: #ecf0f1;
  margin-top: auto;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 3rem 2rem 0;
}

.footer-content {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.footer-section:first-child {
  max-width: 350px;
}

.footer-logo .logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-bottom: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  color: #ecf0f1;
}

.logo-icon {
  font-size: 2rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3));
}

.footer-description {
  color: #bdc3c7;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem;
  height: 2.5rem;
  background: rgba(236, 240, 241, 0.1);
  border-radius: 0.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.social-link:hover {
  background: rgba(52, 152, 219, 0.2);
  transform: translateY(-2px);
}

.social-icon {
  font-size: 1.2rem;
}

.section-title {
  color: #ecf0f1;
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -0.5rem;
  left: 0;
  width: 2rem;
  height: 2px;
  background: linear-gradient(90deg, #3498db, #2980b9);
  border-radius: 1px;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin-bottom: 0.75rem;
}

.footer-link {
  color: #bdc3c7;
  text-decoration: none;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  display: inline-block;
  position: relative;
}

.footer-link:hover {
  color: #3498db;
  transform: translateX(4px);
}

.footer-link::before {
  content: '';
  position: absolute;
  left: -8px;
  top: 50%;
  transform: translateY(-50%);
  width: 4px;
  height: 4px;
  background: #3498db;
  border-radius: 50%;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.footer-link:hover::before {
  opacity: 1;
}

.footer-bottom {
  border-top: 1px solid rgba(189, 195, 199, 0.1);
  padding: 1.5rem 0;
}

.footer-bottom-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
}

.copyright {
  color: #95a5a6;
  font-size: 0.9rem;
}

.footer-meta {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #7f8c8d;
  font-size: 0.85rem;
}

.separator {
  color: #7f8c8d;
}

.version,
.build {
  font-family: 'Courier New', monospace;
  background: rgba(189, 195, 199, 0.1);
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.8rem;
}

.status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.status-healthy {
  background: rgba(39, 174, 96, 0.1);
  color: #27ae60;
}

.status-healthy .status-dot {
  background: #27ae60;
}

.status-warning {
  background: rgba(241, 196, 15, 0.1);
  color: #f1c40f;
}

.status-warning .status-dot {
  background: #f39c12;
}

.status-error {
  background: rgba(231, 76, 60, 0.1);
  color: #e74c3c;
}

.status-error .status-dot {
  background: #e74c3c;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

@media (max-width: 1200px) {
  .footer-content {
    grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 2rem;
  }
  
  .footer-section:last-child {
    grid-column: 2 / -1;
  }
}

@media (max-width: 768px) {
  .footer-container {
    padding: 2rem 1rem 0;
  }
  
  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    text-align: center;
  }
  
  .footer-section:first-child {
    max-width: 100%;
  }
  
  .footer-bottom-content {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .footer-meta {
    justify-content: center;
    flex-wrap: wrap;
  }
}

@media (max-width: 480px) {
  .social-links {
    justify-content: center;
  }
  
  .footer-meta {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .separator {
    display: none;
  }
}
</style>