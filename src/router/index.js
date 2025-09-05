import { createRouter, createWebHistory } from 'vue-router'

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
    path: '/content-management',
    name: 'ContentManagement',
    component: () => import('../components/Content.vue'),
    meta: {
      title: 'Content Management',
      description: 'Create and manage educational content'
    }
  },
  {
    path: '/categories',
    name: 'Categories',
    component: () => import('../components/Categories.vue'),
    meta: {
      title: 'Categories Management',
      description: 'Organize and structure your practice lab categories with advanced taxonomy management'
    }
  },
  {
    path: '/subjects',
    name: 'subjects',
    component: () => import('../components/Subjects.vue'),
    meta: {
      title: 'subjects Management',
      description: 'Organize and structure your practice lab categories with advanced taxonomy management'
    }
  },
  {
    path: '/roles',
    name: 'roles',
    component: () => import('../components/Roles.vue'),
    meta: {
      title: 'roles Management',
      description: 'Organize and structure your practice lab categories with advanced taxonomy management'
    }
  },
  {
    path: '/chapters',
    name: 'chapters',
    component: () => import('../components/Chapters.vue'),
    meta: {
      title: 'chapters Management',
      description: 'Organize and structure your practice lab categories with advanced taxonomy management'
    }
  },
  {
    path: '/content',
    name: 'content',
    component: () => import('../components/Content.vue'),
    meta: {
      title: 'content Management',
      description: 'Organize and structure your practice lab categories with advanced taxonomy management'
    }
  },
  {
    path: '/answers',
    name: 'answers',
    component: () => import('../components/Answers.vue'),
    meta: {
      title: 'answers Management',
      description: 'Organize and structure your practice lab categories with advanced taxonomy management'
    }
  },
  {
    path: '/llm_instructions',
    name: 'llm_instructions',
    component: () => import('../components/llm_instructions.vue'),
    meta: {
      title: 'llm_instructions Management',
      description: 'Organize and structure your practice lab categories with advanced taxonomy management'
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
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title} | Practice Lab`
  }

  document.body.classList.add('route-loading')
  
  next()
})

router.afterEach((to, from) => {
  setTimeout(() => {
    document.body.classList.remove('route-loading')
  }, 100)
  
  if (to.meta.description) {
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', to.meta.description)
    }
  }
})

export default router