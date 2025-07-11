// src/stores/test.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

//create store with a unique id ="test"
export const useTestStore = defineStore('test', () => {
 
  const count = ref(0) //reactive number creation 

  //when we create a store we check if the saved number exists
  const saved = localStorage.getItem('testCount')
  if (saved !== null) {
    count.value = Number(saved)
  }

  // action to change state and saved 
  function increment() {
    count.value++
    localStorage.setItem('testCount', count.value.toString())
  }
  // return what will be accessible in components
  return { count, increment }
})


export const useThemeStore  = defineStore('theme', () =>{

    const color = ref ("White")

    const saved = localStorage.getItem('theme')
    if (saved) {
        color.value = saved
    }

    function change() {
  if (color.value === 'White') {
    color.value = 'Black'
    console.log("Background Color: ", color.value)
  } else {
    color.value = 'White'
    console.log("Background Color: ", color.value)
  }
  localStorage.setItem('theme', color.value)

  if (color.value === 'White') {
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
  } else {
    document.body.style.backgroundColor = 'black'
    document.body.style.color = 'white'
  }
    }
    
    return { color, change }
})