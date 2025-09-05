import { createRouter, createWebHistory } from 'vue-router'

// Using lazy loading to avoid import errors for files that don't exist yet
const routes = [
  {
    path: '/',
    redirect: '/admin'
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/PracticeLabAdmin.vue'),
    meta: {
      title: 'Practice Lab Administration',
      description: 'Advanced content management system with intelligent workflow automation'
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: {
      title: 'Dashboard',
      description: 'Analytics and insights for your practice lab'
    }
  },
  {
    path: '/content',
    name: 'Content',
    component: () => import('../views/ContentManagement.vue'),
    meta: {
      title: 'Content Management',
      description: 'Create and manage educational content'
    }
  },
  {
    path: '/analytics',
    name: 'Analytics',
    component: () => import('../views/Analytics.vue'),
    meta: {
      title: 'Analytics',
      description: 'Detailed analytics and reporting'
    }
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import('../views/Settings.vue'),
    meta: {
      title: 'Settings',
      description: 'Configure your practice lab settings'
    }
  },
  // Catch-all route for 404 pages
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('../views/NotFound.vue'),
    meta: {
      title: 'Page Not Found'
    }
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new route
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// Global navigation guards
router.beforeEach((to, from, next) => {
  // Update document title
  if (to.meta.title) {
    document.title = `${to.meta.title} | Practice Lab`
  }
  
  // Add loading class to body for transition effects
  document.body.classList.add('route-loading')
  
  next()
})

router.afterEach((to, from) => {
  // Remove loading class after navigation
  setTimeout(() => {
    document.body.classList.remove('route-loading')
  }, 100)
  
  // Update meta description
  if (to.meta.description) {
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', to.meta.description)
    }
  }
})

export default router