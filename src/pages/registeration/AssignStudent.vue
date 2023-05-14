<template>
    <base-card>
        <h2>Register student to course</h2>
        <hr>
        <register-form></register-form>
    </base-card>
</template>
<script>
import BaseCard from '../../components/ui/baseCard.vue';
import registerForm from '../../components/ui/registerForm.vue'
export default {
  components: { registerForm, BaseCard },
    
}
</script>