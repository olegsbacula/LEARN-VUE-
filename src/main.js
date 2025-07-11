import { createApp } from 'vue'
import App from './App.vue' // to create an app

import { createPinia } from 'pinia'
const pinia = createPinia() // to initialize a store 

import './style.css'

const app = createApp(App) // create vue app on the base of the file called app.vue
app.use(pinia) // connect pinia store to the app 
app.mount('#app') // make div id ="app" in index.html