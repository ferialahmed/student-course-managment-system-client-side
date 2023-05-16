<template>
    <base-card>
    <base-button redirect="true" :to="directedLink">Create Student</base-button>
    <div class="centralized">
        <table class="table" v-if="getStudents">
            <tr>
                <th class="bg-primary">Name</th>
                <th class="bg-primary">Gender</th>
                <th class="bg-primary">Age</th>
            </tr>
            <tr v-for="student in getStudents" :key="student.name">
                <td>{{ student.name }}</td>
                <td>{{ student.gender }}</td>
                <td>{{ student.age }}</td>
            </tr>
        </table>
        <h3 v-else>No Students were added</h3>
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
        return this.$route.path + '/create'
    },
    getStudents(){
        const students = this.$store.getters['students/getStudents'];
        return students;
    }
  },
  created(){
    this.loadStudents();
  },
  methods:{
    loadStudents(){
        this.$store.dispatch('students/setStudents')
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