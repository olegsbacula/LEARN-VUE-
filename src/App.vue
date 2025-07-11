<template>
  <!-- Root app element-->
  <div id="app">
    <!--Render our test pinia component-->
    <ThemeSwitcher />
    <TestPinia />
  </div>
</template>

<script setup>
//import pinia component into app 
import TestPinia from './components/TestPinia.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
</script>
