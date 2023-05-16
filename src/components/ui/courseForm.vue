<template>
    <form @submit.prevent="createCourse">
        <div class="form-control">
            <label for="courseName">Course Name</label>
            <input
                type="text"
                name="courseName"
                required
                v-model.trim="courseName"
                @blur="validateForm"
            />
        </div>
        <div class="form-control">
            <label for="courseDescription">Course Description</label>
            <textarea
                type="text"
                name="courseDescription"
                required
                v-model.trim="courseDescription"
                @blur="validateForm"
            ></textarea>
            
        </div>
        <div class="form-control">
            <base-button>Create</base-button>
        </div>
    </form>
</template>
<script>
import baseButton from './baseButton.vue';
export default {
    components:{baseButton},
    data(){
        return{
        courseName: '',
        courseDescription: '',
    }
},
methods:{
    createCourse(){
            this.$store.dispatch('courses/createCourse',{
                name: this.courseName,
                description: this.courseDescription
            })
            console.log('course created successfully')
            this.$router.push('/courses');
    }
}
}
</script>
<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 50%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

</style>