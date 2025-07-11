<template>
  <div class="theme-switcher" style="
    position: absolute;
    top: 0;
    left: 0;">
    <button @click="store.change()">Change Theme</button>
  </div>
  <br>
</template>

<script setup>
import { watch } from 'vue'
import { useThemeStore } from '../stores/test'


const store = useThemeStore()

watch(
  () => store.color,
  newTheme => {
    document.body.setAttribute('data-theme', newTheme.toLowerCase())
  },
  { immediate: true }
)
</script>
