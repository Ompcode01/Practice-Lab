<template>
  <div class="content-management-page">
    <Header />
    
    <main class="main-content">
      <div class="container">
        <div class="page-header">
          <h1>Content Management</h1>
          <p>Create and manage educational content</p>
          <button class="create-btn" @click="handleCreateContent">
            <span class="btn-icon">➕</span>
            Create New Content
          </button>
        </div>
        
        <div class="content-grid">
          <div class="content-card" v-for="item in contentItems" :key="item.id">
            <div class="content-thumbnail">
              <div class="thumbnail-icon">{{ item.icon }}</div>
            </div>
            <div class="content-info">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
              <div class="content-meta">
                <span class="content-type">{{ item.type }}</span>
                <span class="content-status" :class="item.status.toLowerCase()">
                  {{ item.status }}
                </span>
              </div>
            </div>
            <div class="content-actions">
              <button @click="handleEdit(item)" class="action-btn edit">
                ✏️
              </button>
              <button @click="handleView(item)" class="action-btn view">
                👁️
              </button>
              <button @click="handleDelete(item)" class="action-btn delete">
                🗑️
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
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const router = useRouter()

const contentItems = ref([
  {
    id: 1,
    title: 'JavaScript Fundamentals',
    description: 'Complete guide to JavaScript basics and advanced concepts',
    type: 'Course',
    status: 'Published',
    icon: '📚'
  },
  {
    id: 2,
    title: 'Vue.js Components',
    description: 'Building reusable components in Vue.js',
    type: 'Tutorial',
    status: 'Draft',
    icon: '🎯'
  },
  {
    id: 3,
    title: 'API Integration Lab',
    description: 'Hands-on practice with REST APIs',
    type: 'Lab',
    status: 'Published',
    icon: '⚡'
  },
  {
    id: 4,
    title: 'Database Design',
    description: 'SQL and NoSQL database fundamentals',
    type: 'Course',
    status: 'Review',
    icon: '🗄️'
  }
])

// Example of programmatic navigation
const handleCreateContent = () => {
  console.log('Creating new content...')
  // You could navigate to a create page:
  // router.push('/content/create')
}

const handleEdit = (item) => {
  console.log('Editing:', item.title)
  // Navigate to edit page:
  // router.push(`/content/edit/${item.id}`)
}

const handleView = (item) => {
  console.log('Viewing:', item.title)
}

const handleDelete = (item) => {
  console.log('Deleting:', item.title)
}
</script>

<style scoped>
.content-management-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding: 2rem 0;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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
  margin-bottom: 2rem;
  opacity: 0.9;
}

.create-btn {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
  backdrop-filter: blur(10px);
}

.create-btn:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.btn-icon {
  font-size: 1.2rem;
}

.content-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 2rem;
}

.content-card {
  background: rgba(255, 255, 255, 0.95);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.3s ease;
  backdrop-filter: blur(10px);
}

.content-card:hover {
  transform: translateY(-5px);
}

.content-thumbnail {
  flex-shrink: 0;
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.thumbnail-icon {
  font-size: 2rem;
  filter: brightness(0) invert(1);
}

.content-info {
  flex: 1;
}

.content-info h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.content-info p {
  color: #7f8c8d;
  font-size: 0.9rem;
  margin-bottom: 0.75rem;
}

.content-meta {
  display: flex;
  gap: 0.5rem;
  align-items: center;
}

.content-type {
  background: #e3f2fd;
  color: #1565c0;
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
}

.content-status {
  padding: 0.25rem 0.75rem;
  border-radius: 1rem;
  font-size: 0.8rem;
  font-weight: 500;
}

.content-status.published {
  background: #d4edda;
  color: #155724;
}

.content-status.draft {
  background: #fff3cd;
  color: #856404;
}

.content-status.review {
  background: #f8d7da;
  color: #721c24;
}

.content-actions {
  display: flex;
  gap: 0.5rem;
}

.action-btn {
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
}

.action-btn.edit {
  background: #e3f2fd;
  color: #1565c0;
}

.action-btn.view {
  background: #f3e5f5;
  color: #7b1fa2;
}

.action-btn.delete {
  background: #ffebee;
  color: #c62828;
}

.action-btn:hover {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .content-grid {
    grid-template-columns: 1fr;
  }
  
  .content-card {
    flex-direction: column;
    text-align: center;
  }
}
</style>