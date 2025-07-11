<template>
  <div style="padding:1rem; border:1px solid #ccc; max-width:320px">
    <h2>Pinia Quick-Test</h2>
    <!-- Take our current number -->
    <p>Count: {{ store.count }}</p>
    <!-- On click call eventhandle to increment by one -->
    <button @click="store.increment()">+1</button>
  </div>
</template>

<script setup>
// Import function for the store
import { useTestStore } from '../stores/test'

// Get store instance
const store = useTestStore()
</script>
