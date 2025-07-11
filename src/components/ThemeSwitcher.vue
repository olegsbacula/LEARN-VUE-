<template>
  <lx-card class="theme-switcher" :shadow="true" style="width: 300px;">
    <template #header>
      <lx-icon name="sun" /> 
      Theme: {{ store.color }}
    </template>

    <lx-button
      @click="store.change()"
      :icon="store.color === 'White' ? 'moon' : 'sun'"
      variant="primary"
    >
      Switch to {{ store.color === 'White' ? 'Black' : 'White' }}
    </lx-button>
  </lx-card>
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
