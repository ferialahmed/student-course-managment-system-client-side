<template>
    <base-card>
        <base-button redirect="true" :to="directedLink">Assign student to Course</base-button>
       <div class="centralized">
        <table class="table" v-if="registered">
            <tr>
                <th>Student Name</th>
                <th>Course Name</th>
                <th>Grade</th>
            </tr>
            <tr v-for="(register, index) in registered" :key="index">
                <td>{{ register.StudentName }}</td>
                <td>{{ register.CourseName }}</td>
                <td>{{ register.Grade }}</td>
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
        
    }
  },
  computed:{
    directedLink(){
        return '/assign'
    }
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
    background-color: #3a0061;
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