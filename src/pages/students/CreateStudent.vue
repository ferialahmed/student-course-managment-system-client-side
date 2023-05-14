<template>
    <base-card>
        <h2>Create new student</h2>
        <hr>
        <student-form></student-form>
    </base-card>
</template>
<script>
import BaseCard from '../../components/ui/baseCard.vue';
import studentForm from '../../components/ui/studentForm.vue'
export default {
  components: { studentForm, BaseCard },
    
}
</script>
