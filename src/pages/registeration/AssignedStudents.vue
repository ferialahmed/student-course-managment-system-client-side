<template>
    <base-card>
    <base-button redirect="true" :to="directedLink">Enroll Student</base-button>
    <div class="centralized">
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <table class="table" v-else-if="getAssignedStudents.length > 0" >
            <tr >
                <th class="bg-primary">Student Name</th>
                <th class="bg-primary">Course Name</th>
                <th class="bg-primary">Grade</th>
            </tr>
            <tr v-for="(assignedStudent,index) in getAssignedStudents" :key="index">
                <td>{{ assignedStudent.studentName}}</td>
                <td>{{ assignedStudent.courseName}}</td>
                <td>{{ assignedStudent.gradeValue }}</td>
            </tr>
        </table>
        <h3 v-else>No Enrolled students </h3>
    </div>
    </base-card>
</template>
<script>
import baseButton from '@/components/ui/baseButton.vue';
import baseCard from '@/components/ui/baseCard.vue';
import baseSpinner from '@/components/ui/baseSpinner.vue';
export default {
components: { baseButton, baseCard, baseSpinner },
data(){
return{
    students: [],
    courses:[],
    assignedStudents: [],
    isLoading: false
}
},
computed:{
directedLink(){
    return '/assign'
},
getAssignedStudents(){
    console.log(this.$store.getters['assignedStudents/getAssignedStudents'])
    return this.$store.getters['assignedStudents/getAssignedStudents'];
}
},
methods:{
async loadAssignedStudents(){
    this.isLoading = true
    await this.$store.dispatch('assignedStudents/setAssignedStudents');   
    this.isLoading = false
}
},
//   watch:{
//     getAssignedStudents(newValue){
//       if(newValue.length > 0){
//         this.isLoading = false
//       }
//     }
//   },    
created(){
this.loadAssignedStudents()
}
}
</script>
<style scoped>
.centralized{
    margin-top: 2rem ;
    display: flex;
    justify-content: center;
}
.centralized td, .centralized th{
    
    border: 2px solid #f4f3f3;
    padding: 8px;

}
.centralized th{
    color: white;
}
.centralized tr{
    text-align: center;
}
.table{
    width: 100%;
    border-collapse: collapse;
}
</style>