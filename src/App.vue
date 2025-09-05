<template>
  <div id="app">
    <router-view v-slot="{ Component, route }">
      <transition 
        name="page" 
        mode="out-in"
        @enter="onPageEnter"
        @leave="onPageLeave"
      >
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

// Page transition handlers
const onPageEnter = (el) => {
  // Add entrance animation class
  el.classList.add('page-entering')
}

const onPageLeave = (el) => {
  // Add exit animation class
  el.classList.add('page-leaving')
}

// Lifecycle
onMounted(() => {
  // Add any global initialization here
  console.log('Practice Lab Application Initialized')
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
  line-height: 1.6;
  color: #2c3e50;
  background: #f8fafc;
  transition: opacity 0.3s ease;
}

body.route-loading {
  opacity: 0.95;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Page Transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px) scale(0.98);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px) scale(1.02);
}

/* Global Scrollbar Styles */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f5f9;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: linear-gradient(135deg, #5a67d8 0%, #6c5ce7 100%);
}

/* Firefox Scrollbar */
html {
  scrollbar-width: thin;
  scrollbar-color: #667eea #f1f5f9;
}

/* Global Selection Styles */
::selection {
  background: rgba(102, 126, 234, 0.2);
  color: #2d3748;
}

::-moz-selection {
  background: rgba(102, 126, 234, 0.2);
  color: #2d3748;
}

/* Global Focus Styles */
*:focus {
  outline: 2px solid #667eea;
  outline-offset: 2px;
}

*:focus:not(:focus-visible) {
  outline: none;
}

/* Typography */
h1, h2, h3, h4, h5, h6 {
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 0.5rem;
}

p {
  margin-bottom: 1rem;
}

/* Utility Classes */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}

.text-center {
  text-align: center;
}

.text-left {
  text-align: left;
}

.text-right {
  text-align: right;
}

/* Loading States */
.loading {
  opacity: 0.7;
  pointer-events: none;
}

/* Accessibility */
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  
  .page-enter-active,
  .page-leave-active {
    transition: none;
  }
}

/* High contrast mode support */
@media (prefers-contrast: high) {
  body {
    background: #ffffff;
    color: #000000;
  }
}

/* Print styles */
@media print {
  body {
    background: white;
    color: black;
  }
  
  .no-print {
    display: none;
  }
}
</style>