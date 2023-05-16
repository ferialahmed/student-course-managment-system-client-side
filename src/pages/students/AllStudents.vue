<template>
    <base-card>
    <base-button redirect="true" :to="directedLink">Register Student</base-button>
    <div class="centralized">
      <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <table class="table" v-else-if="getStudents.length > 0">
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
        <h3 v-else>No Registered Students</h3>
    </div>
    </base-card>
</template>
<script>
import baseButton from '@/components/ui/baseButton.vue';
import baseCard from '@/components/ui/baseCard.vue';
import baseSpinner from '@/components/ui/baseSpinner.vue';
export default {
  components: { baseButton, baseCard , baseSpinner},
  data(){
    return{
        isLoading : false
    }
  },
  computed:{
    directedLink(){
        return this.$route.path + '/create'
    },
    getStudents(){
        return this.$store.getters['students/getStudents'];
    }
  },
  created(){
    this.loadStudents();
  },
  methods:{
    async loadStudents(){
        this.isLoading = true;
        await this.$store.dispatch('students/setStudents');
        this.isLoading = false;
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