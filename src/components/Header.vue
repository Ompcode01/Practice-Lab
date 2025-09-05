<template>
  <header class="app-header">
    <div class="header-container">
      <div class="header-left">
        <router-link to="/" class="logo-link">
          <div class="logo">
            <div class="logo-icon">🧪</div>
            <span class="logo-text">Practice Lab</span>
          </div>
        </router-link>
        <nav class="main-nav">
          <router-link to="/admin" class="nav-item" active-class="active">
            <span class="nav-icon">⚙️</span>
            Administration
          </router-link>
          <router-link to="/dashboard" class="nav-item" active-class="active">
            <span class="nav-icon">📊</span>
            Dashboard
          </router-link>
          <router-link to="/content" class="nav-item" active-class="active">
            <span class="nav-icon">📚</span>
            Content
          </router-link>
        </nav>
      </div>
      
      <div class="header-right">
        <div class="search-bar">
          <input 
            type="text" 
            placeholder="Search..." 
            v-model="searchQuery"
            @input="handleSearch"
          >
          <div class="search-icon">🔍</div>
        </div>
        
        <div class="user-menu">
          <div class="notifications" @click="toggleNotifications">
            <span class="notification-icon">🔔</span>
            <span class="notification-badge" v-if="notificationCount > 0">
              {{ notificationCount }}
            </span>
          </div>
          
          <div class="user-profile" @click="toggleUserMenu">
            <div class="avatar">👤</div>
            <span class="username">Admin</span>
            <span class="dropdown-arrow">⌄</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- User dropdown menu -->
    <Transition name="dropdown">
      <div class="user-dropdown" v-if="showUserMenu" @click.stop>
        <div class="dropdown-item" @click="handleProfile">
          <span class="dropdown-icon">👤</span>
          Profile Settings
        </div>
        <div class="dropdown-item" @click="handlePreferences">
          <span class="dropdown-icon">⚙️</span>
          Preferences
        </div>
        <div class="dropdown-divider"></div>
        <div class="dropdown-item logout" @click="handleLogout">
          <span class="dropdown-icon">🚪</span>
          Logout
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

// Reactive state
const searchQuery = ref('')
const showUserMenu = ref(false)
const notificationCount = ref(3)

// Methods
const handleSearch = () => {
  // Implement search functionality
  console.log('Searching for:', searchQuery.value)
}

const toggleNotifications = () => {
  console.log('Toggle notifications')
}

const toggleUserMenu = () => {
  showUserMenu.value = !showUserMenu.value
}

const handleProfile = () => {
  console.log('Open profile')
  showUserMenu.value = false
}

const handlePreferences = () => {
  console.log('Open preferences')
  showUserMenu.value = false
}

const handleLogout = () => {
  console.log('Logout')
  showUserMenu.value = false
}

const handleClickOutside = (event) => {
  if (!event.target.closest('.user-menu')) {
    showUserMenu.value = false
  }
}

// Lifecycle
onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
.app-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
  backdrop-filter: blur(10px);
}

.header-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.logo-link {
  text-decoration: none;
}

.logo {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.logo:hover {
  transform: scale(1.05);
}

.logo-icon {
  font-size: 2rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.main-nav {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  font-weight: 500;
}

.nav-item:hover {
  color: white;
  background: rgba(255, 255, 255, 0.1);
  transform: translateY(-2px);
}

.nav-item.active {
  color: white;
  background: rgba(255, 255, 255, 0.2);
}

.nav-icon {
  font-size: 1.1rem;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.search-bar {
  position: relative;
  display: flex;
  align-items: center;
}

.search-bar input {
  padding: 0.5rem 1rem;
  padding-right: 2.5rem;
  border: none;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-size: 0.9rem;
  width: 250px;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.search-bar input::placeholder {
  color: rgba(255, 255, 255, 0.6);
}

.search-bar input:focus {
  outline: none;
  background: rgba(255, 255, 255, 0.2);
  width: 300px;
}

.search-icon {
  position: absolute;
  right: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  pointer-events: none;
}

.user-menu {
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
}

.notifications {
  position: relative;
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  color: rgba(255, 255, 255, 0.8);
}

.notifications:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
}

.notification-icon {
  font-size: 1.2rem;
}

.notification-badge {
  position: absolute;
  top: -2px;
  right: -2px;
  background: #ff4757;
  color: white;
  font-size: 0.7rem;
  padding: 0.2rem 0.4rem;
  border-radius: 0.5rem;
  min-width: 1.2rem;
  text-align: center;
  font-weight: 600;
}

.user-profile {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  color: rgba(255, 255, 255, 0.8);
  background: rgba(255, 255, 255, 0.1);
}

.user-profile:hover {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

.avatar {
  font-size: 1.5rem;
  width: 2rem;
  height: 2rem;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.username {
  font-weight: 500;
}

.dropdown-arrow {
  transition: transform 0.3s ease;
}

.user-profile:hover .dropdown-arrow {
  transform: rotate(180deg);
}

.user-dropdown {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 0.5rem;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  min-width: 200px;
  overflow: hidden;
  backdrop-filter: blur(10px);
}

.dropdown-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  color: #333;
  cursor: pointer;
  transition: all 0.3s ease;
}

.dropdown-item:hover {
  background: #f8f9fa;
}

.dropdown-item.logout:hover {
  background: #fee;
  color: #e74c3c;
}

.dropdown-icon {
  font-size: 1.1rem;
}

.dropdown-divider {
  height: 1px;
  background: #eee;
  margin: 0.5rem 0;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s cubic-bezier(0.23, 1, 0.320, 1);
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px) scale(0.95);
}

@media (max-width: 768px) {
  .header-container {
    padding: 0 1rem;
  }
  
  .main-nav {
    display: none;
  }
  
  .search-bar input {
    width: 150px;
  }
  
  .search-bar input:focus {
    width: 200px;
  }
  
  .username {
    display: none;
  }
}
</style>