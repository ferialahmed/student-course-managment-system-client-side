<template>
    <base-card>
        <h2>Create new course</h2>
        <hr>
        <course-form></course-form>
    </base-card>
</template>
<script>
import BaseCard from '../../components/ui/baseCard.vue';
import courseForm from '../../components/ui/courseForm.vue'
export default {
  components: { courseForm, BaseCard },
    
}
</script>
<style scoped>

</style>