  <template>
    <div style="padding: 1rem; border: 1px solid #ccc; max-width: 320px;">
      <h2>Pinia Quick-Test</h2>
      <p>Count: {{ store.count }}</p>
      <button @click="store.increment()">+1</button>
    </div>
  </template>

  <script setup>
  import { ref } from 'vue'
  import { createApp } from 'vue'
  import App from './App.vue'
  import { createPinia } from 'pinia'
  const pinia = createPinia()

  const app = createApp(App)
  app.use(pinia)
  app.mount('#app')

  const store = useTestStore()
  </script>
