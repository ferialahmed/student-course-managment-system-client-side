<template>
  <div>
    <the-navigation></the-navigation>
    <RouterView v-slot="slotProps">
      <transition name="animate" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </RouterView>
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
.animate-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}
.animate-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
.animate-enter-to,
.animate-leave-from {
  opacity: 1;
  transform: translateY(0);
}
.animate-enter-active {
  transition: all 0.3s ease-in;
}
.animate-leave-active {
  transition: all 0.3s ease-out;
}
</style>
