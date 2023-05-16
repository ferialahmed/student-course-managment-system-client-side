<template>
    <base-card>
    <base-button redirect="true" :to="directedLink">Assign student to Course</base-button>
    <div class="centralized">
        <table class="table" v-if="assignedStudents" >
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
        <h3 v-else>No Assigned students</h3>
    </div>
    </base-card>
</template>
<script>
import baseButton from '@/components/ui/baseButton.vue';
import baseCard from '@/components/ui/baseCard.vue';
export default {
components: { baseButton, baseCard },
data(){
return{
    students: [],
    courses:[],
    assignedStudents: []
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
loadAssignedStudents(){
    this.$store.dispatch('assignedStudents/setAssignedStudents');   
}
},
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