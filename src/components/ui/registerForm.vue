<template>
    <form @submit.prevent="assignStudent">
        
        <div class="form-control" >
            <label for="student">student</label>
            <select name="student" required >
                <option value="" >Please select one…</option>
                <option v-for="student in allStudents" :key="student.id" :value="student.name">{{student.name}}</option>
            </select>
        </div>
        <div class="form-control" >
            <label for="course">course</label>
            <select name="course" required>
                <option value="" >Please select one…</option>
                <option v-for="course in allCourses" :value="course.name" :key="course.id">{{course.name}}</option>
            </select>
        </div>
        <div class="form-control" >
            <label for="grade">Grade</label>
            <input
                type="number"
                id="grade"
                min="0"
                max="100"
                step=".01"
                required
                v-model.trim="grade"
            />
        </div>
        <div class="form-control">
            <base-button>Register</base-button>
        </div>
    </form>
</template>
<script>
import baseButton from './baseButton.vue';
export default {
    components:{baseButton},
    data(){
        return{
        
    }
},
computed:{
    allStudents(){
        return this.$store.getters['students/getStudents'];
    },
    allCourses(){
        return this.$store.getters['courses/getCourses']
    }
},
methods:{
    assignStudent(){
        console.log('student assigned to course');
        this.$router.push('/registered');
    },
    getStudents(){
        this.$store.dispatch('students/setStudents');
    },
    getCourses(){
        this.$store.dispatch('courses/setCourses');
    }
},
created(){
    this.getStudents();
    this.getCourses();
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