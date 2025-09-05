import "./style.css"
<template>
  <div class="practice-lab-admin">
    <!-- Header Component -->
    <Header />
    
    <div class="main-content">
      <div class="background-pattern"></div>
      
      <div class="container">
        <!-- Header -->
        <div class="header">
          <h1>Practice Lab Administration</h1>
          <p>Advanced content management system with intelligent workflow automation</p>
        </div>

        <!-- Entity Management -->
        <div class="section">
          <div class="section-header">
            <div class="section-icon">🎯</div>
            <h2 class="section-title">Entity Management</h2>
          </div>
          
          <div class="cards-container">
            <div 
              class="card categories" 
              @click="handleCardClick('categories')"
            >
              <div class="loading-overlay" :class="{ active: loadingStates.categories }">
                <div class="loading-spinner"></div>
              </div>
              <div class="card-content">
                <div class="card-icon">📁</div>
                <h3>Categories</h3>
                <p>Organize and structure your practice lab categories with advanced taxonomy management and hierarchical organization systems.</p>
              </div>
            </div>

            <div 
              class="card subjects" 
              @click="handleCardClick('subjects')"
            >
              <div class="loading-overlay" :class="{ active: loadingStates.subjects }">
                <div class="loading-spinner"></div>
              </div>
              <div class="card-content">
                <div class="card-icon">🎓</div>
                <h3>Subjects</h3>
                <p>Create comprehensive subject areas with detailed curriculum mapping and learning outcome tracking for enhanced educational delivery.</p>
              </div>
            </div>

            <div 
              class="card roles" 
              @click="handleCardClick('roles')"
            >
              <div class="loading-overlay" :class="{ active: loadingStates.roles }">
                <div class="loading-spinner"></div>
              </div>
              <div class="card-content">
                <div class="card-icon">📊</div>
                <h3>Roles</h3>
                <p>Clearly defined roles like Software Developer, Data Engineer, and more, enabling streamlined collaboration and responsibility alignment.</p>
              </div>
            </div>

            <div 
              class="card chapters" 
              @click="handleCardClick('chapters')"
            >
              <div class="loading-overlay" :class="{ active: loadingStates.chapters }">
                <div class="loading-spinner"></div>
              </div>
              <div class="card-content">
                <div class="card-icon">🗄️</div>
                <h3>Chapters</h3>
                <p>Organized chapters that structure content into clear, sequential sections for easier navigation and learning.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Content Management -->
        <div class="section">
          <div class="section-header">
            <div class="section-icon">✨</div>
            <h2 class="section-title">Content Management</h2>
          </div>
          
          <div class="cards-container">
            <div 
              class="card content" 
              @click="handleCardClick('content')"
            >
              <div class="loading-overlay" :class="{ active: loadingStates.content }">
                <div class="loading-spinner"></div>
              </div>
              <div class="card-content">
                <div class="card-icon">📚</div>
                <h3>Content</h3>
                <p>Dynamic chapter creation with multimedia support, interactive elements, and adaptive learning pathways for engaging content delivery.</p>
              </div>
            </div>

            <div 
              class="card answers" 
              @click="handleCardClick('answers')"
            >
              <div class="loading-overlay" :class="{ active: loadingStates.answers }">
                <div class="loading-spinner"></div>
              </div>
              <div class="card-content">
                <div class="card-icon">✅</div>
                <h3>Answers</h3>
                <p>AI-powered content validation with quality assurance protocols, automated compliance checking, and consistency verification.</p>
              </div>
            </div>

            <div 
              class="card llm_instructions" 
              @click="handleCardClick('llm_instructions')"
            >
              <div class="loading-overlay" :class="{ active: loadingStates.llm_instructions }">
                <div class="loading-spinner"></div>
              </div>
              <div class="card-content">
                <div class="card-icon">⚡</div>
                <h3>LLM Instructions</h3>
                <p>Intelligent workflow automation with custom triggers, batch processing capabilities, and seamless integration protocols.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Quick Actions -->
        <div class="quick-actions">
          <div class="quick-actions-content">
            <h2>Quick Actions</h2>
            <div class="quick-cards">
              <div 
                class="quick-card quick-content"
                @click="handleQuickAction('manage-content')"
              >
                <div class="loading-overlay" :class="{ active: loadingStates.quickContent }">
                  <div class="loading-spinner"></div>
                </div>
                <div class="quick-card-icon">📝</div>
                <h3>Manage Content</h3>
                <p>Launch the advanced content editor with collaborative features, version control, and real-time preview capabilities for seamless content creation.</p>
              </div>

              <div 
                class="quick-card quick-answers"
                @click="handleQuickAction('manage-answers')"
              >
                <div class="loading-overlay" :class="{ active: loadingStates.quickAnswers }">
                  <div class="loading-spinner"></div>
                </div>
                <div class="quick-card-icon">🎯</div>
                <h3>Manage Answers</h3>
                <p>Configure intelligent answer validation systems with adaptive grading algorithms and comprehensive feedback mechanisms for enhanced learning.</p>
              </div>

              <div 
                class="quick-card quick-llm"
                @click="handleQuickAction('llm-instructions')"
              >
                <div class="loading-overlay" :class="{ active: loadingStates.quickLLM }">
                  <div class="loading-spinner"></div>
                </div>
                <div class="quick-card-icon">🤖</div>
                <h3>LLM Instructions</h3>
                <p>Fine-tune AI assistance parameters with custom prompt engineering, response optimization, and intelligent content generation settings.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Footer Component -->
    <Footer />

    <!-- Notification -->
    <Transition name="notification">
      <div 
        class="notification" 
        v-if="notification.show"
      >
        {{ notification.message }}
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

// Router instance
const router = useRouter()

// Reactive state
const loadingStates = reactive({
  categories: false,
  subjects: false,
  roles: false,
  chapters: false,
  content: false,
  answers: false,
  llm_instructions: false,
  quickContent: false,
  quickAnswers: false,
  quickLLM: false
})

const notification = reactive({
  show: false,
  message: ''
})

// Methods
const showNotification = (message) => {
  notification.message = message
  notification.show = true
  setTimeout(() => {
    notification.show = false
    setTimeout(() => {
      notification.message = ''
    }, 400)
  }, 3500)
}

const simulateLoading = async (key, duration = 2000) => {
  loadingStates[key] = true
  await new Promise(resolve => setTimeout(resolve, duration))
  loadingStates[key] = false
}

const handleCardClick = async (section) => {
  const sectionNames = {
    categories: 'Categories Management Portal',
    subjects: 'Subjects Administration Hub', 
    roles: 'Advanced Analytics Dashboard',
    chapters: 'Archive Management System',
    content: 'Chapter Creation Studio',
    answers: 'Content Validation Center',
    llm_instructions: 'Automation Control Panel'
  }

  // Route mapping for navigation
  const routeMap = {
    categories: '/categories',
    subjects: '/subjects',
    roles: '/roles',
    chapters: '/chapters',
    content: '/content-management',
    answers: '/answers',
    llm_instructions: '/llm_instructions'
  }

  await simulateLoading(section)
  showNotification(`🚀 Launching ${sectionNames[section]}...`)
  
  // Navigate to the corresponding route
  if (routeMap[section]) {
    setTimeout(() => {
      router.push(routeMap[section])
    }, 1000) // Navigate after 1 second to show the loading effect
  }
}

const handleQuickAction = async (action) => {
  const actionMap = {
    'manage-content': 'quickContent',
    'manage-answers': 'quickAnswers', 
    'llm-instructions': 'quickLLM'
  }

  const actionNames = {
    'manage-content': 'Content Management Studio',
    'manage-answers': 'Answer Management System',
    'llm-instructions': 'AI Configuration Center'
  }

  // Route mapping for quick actions
  const quickRouteMap = {
    'manage-content': '/content-management',
    'manage-answers': '/answers',
    'llm-instructions': '/llm-instructions'
  }

  const loadingKey = actionMap[action]
  if (loadingKey) {
    await simulateLoading(loadingKey)
    showNotification(`✨ Opening ${actionNames[action]}...`)
    
    // Navigate to the corresponding route
    if (quickRouteMap[action]) {
      setTimeout(() => {
        router.push(quickRouteMap[action])
      }, 1000) // Navigate after 1 second to show the loading effect
    }
  }
}

// Lifecycle
onMounted(async () => {
  await nextTick()
  // Staggered entrance animations
  const elements = document.querySelectorAll('.section, .quick-actions')
  elements.forEach((element, index) => {
    element.style.opacity = '0'
    element.style.transform = 'translateY(50px)'
    setTimeout(() => {
      element.style.transition = 'opacity 0.8s cubic-bezier(0.23, 1, 0.320, 1), transform 0.8s cubic-bezier(0.23, 1, 0.320, 1)'
      element.style.opacity = '1'
      element.style.transform = 'translateY(0)'
    }, index * 300)
  })
})
</script>

<style scoped>
.practice-lab-admin {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  position: relative;
}

.background-pattern {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  opacity: 0.1;
  z-index: -1;
}

.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
}

.header {
  text-align: center;
  margin-bottom: 4rem;
}

.header h1 {
  font-size: 3rem;
  color: #2c3e50;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.header p {
  font-size: 1.2rem;
  color: #7f8c8d;
  max-width: 600px;
  margin: 0 auto;
}

.section {
  margin-bottom: 4rem;
}

.section-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.section-icon {
  font-size: 2rem;
}

.section-title {
  font-size: 2rem;
  color: #2c3e50;
}

.cards-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
  cursor: pointer;
  position: relative;
  backdrop-filter: blur(10px);
}

.card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);
}

.card-content {
  position: relative;
  z-index: 2;
}

.card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.card h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.card p {
  color: #7f8c8d;
  line-height: 1.6;
}

.loading-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
  z-index: 3;
}

.loading-overlay.active {
  opacity: 1;
  visibility: visible;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #667eea;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.quick-actions {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 2rem;
  padding: 3rem 2rem;
  color: white;
  margin-top: 4rem;
}

.quick-actions-content h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
}

.quick-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.quick-card {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 1rem;
  padding: 2rem;
  text-align: center;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
  cursor: pointer;
  position: relative;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
}

.quick-card:hover {
  transform: translateY(-5px);
  background: rgba(255, 255, 255, 0.2);
}

.quick-card-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.quick-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.quick-card p {
  opacity: 0.9;
  line-height: 1.6;
}

.notification {
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: #2c3e50;
  color: white;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  font-weight: 500;
}

.notification-enter-active,
.notification-leave-active {
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}

.notification-enter-from {
  opacity: 0;
  transform: translateX(100%);
}

.notification-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

@media (max-width: 768px) {
  .container {
    padding: 1rem;
  }
  
  .header h1 {
    font-size: 2rem;
  }
  
  .cards-container {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .quick-cards {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
  
  .notification {
    top: 1rem;
    right: 1rem;
    left: 1rem;
  }
}
</style>