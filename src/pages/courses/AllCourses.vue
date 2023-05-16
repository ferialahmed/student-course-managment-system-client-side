<template>
    <base-card>
        <base-button redirect="true" :to="directedLink">Create Course</base-button>
       <div class="centralized">
        <div v-if="isLoading">
          <base-spinner></base-spinner>
        </div>
        <table class="table" v-else-if="getCourses.length > 0">
            <tr>
                <th class="bg-primary">Course Name</th>
                <th class="bg-primary">Course Description</th>
            </tr>
            <tr v-for="course in getCourses" :key="course.name">
                <td>{{ course.name }}</td>
                <td>{{ course.description }}</td>
            </tr>
        </table>
        
        <h3 v-else>No Courses</h3>
    </div>
    </base-card>
</template>
<script>
import baseButton from '@/components/ui/baseButton.vue';
import baseCard from '@/components/ui/baseCard.vue';
import BaseSpinner from '@/components/ui/baseSpinner.vue';
export default {
  components: { baseButton, baseCard, BaseSpinner },
  data(){
    return{
        isLoading: false
    }
  },
  computed:{
    directedLink(){
        return this.$route.path + '/create'
    },
    getCourses(){
        return this.$store.getters['courses/getCourses'];
    }
  },
  created(){
    this.loadCourses();
  },
  methods:{
    async loadCourses(){
      this.isLoading = true;
      await this.$store.dispatch('courses/setCourses');
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