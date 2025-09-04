import "./style.css"

<template>
  <div class="practice-lab-admin">
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

  await simulateLoading(section)
  showNotification(`🚀 Launching ${sectionNames[section]}...`)
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

  const loadingKey = actionMap[action]
  if (loadingKey) {
    await simulateLoading(loadingKey)
    showNotification(`✨ Opening ${actionNames[action]}...`)
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

