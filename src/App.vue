<template>
  <div>
    <the-navigation></the-navigation>
    <RouterView></RouterView>
  </div>
</template>

<script>
import TheNavigation from './components/nav/TheNavigation.vue'


export default {
  components: { TheNavigation },
  name: 'App',
  
}
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
  background-color: rgb(214, 213, 212);
}
</style>
