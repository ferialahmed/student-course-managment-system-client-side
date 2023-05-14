<template>
    <form @submit.prevent="createCourse">
        <div class="form-control" :class="{invalid: !nameValidity}">
            <label for="courseName">Course Name</label>
            <input
                type="text"
                id="courseName"
                v-model.trim="courseName"
                @blur="validateForm"
            />
            <p v-if="!nameValidity">This Field can't' be Empty</p>
        </div>
        <div class="form-control" :class="{invalid: !descriptionValidity}">
            <label for="courseDescription">Course Description</label>
            <textarea
                type="text"
                id="courseDescription"
                v-model.trim="courseDescription"
                @blur="validateForm"
            ></textarea>
            <p v-if="!descriptionValidity">This Field can't' be Empty</p>
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
        nameValidity: true,
        descriptionValidity: true
    }
},
computed:{
    isFormValid(){
        return this.nameValidity && this.descriptionValidity
    }
},
methods:{
    validateForm(){
        if(!this.courseName){
            this.nameValidity = false
        }
        else{
            this.nameValidity = true
        }
        if(!this.courseDescription){
            this.descriptionValidity = false
        }else{
            this.descriptionValidity = true}
    },
    createCourse(){
        this.validateForm()
        if(this.isFormValid){
            this.$store.dispatch('courses/createCourse',{
                name: this.courseName,
                description: this.courseDescription
            })
            console.log('course created successfully')
            this.$router.push('/courses');
        }
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

.invalid p{
    color: red;
    font-size: 12px;
    margin: 0.2rem 0 0.5rem 0;
}
.invalid input, .invalid textarea{
    border: 1px solid red;
}

</style>