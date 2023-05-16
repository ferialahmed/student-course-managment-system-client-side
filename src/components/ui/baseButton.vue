<template>
    <button class="bg-primary" v-if="!redirect">
        <slot></slot>
    </button>
    <router-link  class="bg-primary" v-else :to="to">
        <slot></slot>
    </router-link>
</template>
<script>
export default {
    props:['to','redirect']
}
</script>
<style scoped>
button,a{
  text-decoration: none;
  font-weight: 600;
  padding: 0.75rem 1.5rem;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 30px;
  margin-top: 2rem;
  margin-right: 0.5rem;
  display: inline-block;
}
</style>