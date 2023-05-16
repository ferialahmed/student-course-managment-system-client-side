<template>
    <form @submit.prevent="assignStudent">
        
        <div class="form-control" >
            <label for="student">student</label>
            <select name="student" required @change="getStudentId($event)" v-model="studentName">
                <option value="" >Please select one…</option>
                <option v-for="student in allStudents" :key="student.id" :value="student.name" :studentid="student.id">{{student.name}}</option>
            </select>
            <label for="course">course</label>
            <select name="course" required @change="getCourseId($event)" v-model="courseName">
                <option value="" >Please select one…</option>
                <option v-for="course in allCourses" :value="course.name" :key="course.id" :courseid="course.id">{{course.name}}</option>
            </select>
            <label for="grade">Grade</label>
            <input
                type="number"
                name="grade"
                min="0"
                max="100"
                step=".01"
                required
                v-model.trim="grade"
            />
            <base-button>Register</base-button>
        </div>
    </form>
    <h3 v-if="!isvalid">is already registered to Course</h3>
</template>
<script>
import baseButton from './baseButton.vue';
export default {
    components:{baseButton},
    data(){
        return{
        studentid: '',
        studentName: '',
        courseName: '',
        courseid: '',
        grade: null,
        isvalid:true,
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
        const allAssignedStudents = this.$store.getters['assignedStudents/getAssignedStudents'];
        const item = allAssignedStudents.find(item => item.studentName === this.studentName && item.courseName === this.courseName);
        if(!item){
        this.$store.dispatch('assignedStudents/assignStudentToCourse',{
            studentId: this.studentid,
        courseId: this.courseid,
            score: this.grade
        })
        this.$router.push('/registered');
    }else{
        this.isvalid = false
    }
    },
    getStudentId(event){
        this.studentid = event.target.options[event.target.options.selectedIndex].getAttribute('studentid');
    },
    getCourseId(event){
        this.courseid = event.target.options[event.target.options.selectedIndex].getAttribute('courseid');
    },
    getStudents(){
        this.$store.dispatch('students/setStudents');
    },
    getCourses(){
        this.$store.dispatch('courses/setCourses');
    },
    getAssignedStudents(){
        this.$store.dispatch('assignedStudents/setAssignedStudents');
    }
},
created(){
    this.getStudents();
    this.getCourses();
    this.getAssignedStudents()
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

h3{
    margin: 0.5rem 0 0.5rem;
    color: red;

}
</style>