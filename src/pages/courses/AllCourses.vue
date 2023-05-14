<template>
    <base-card>
        <base-button redirect="true" :to="directedLink">Create Course</base-button>
       <div class="centralized">
        <table class="table" v-if="getCourses">
            <tr>
                <th>Course Name</th>
                <th>Course Description</th>
            </tr>
            <tr v-for="course in getCourses" :key="course.name">
                <td>{{ course.name }}</td>
                <td>{{ course.description }}</td>
            </tr>
        </table>
        
        <h3 v-else>No Courses Were Created</h3>
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
    getCourses(){
        const courses = this.$store.getters['courses/getCourses'];
        return courses;
    }
  },
  created(){
    this.loadCourses();
  },
  methods:{
    loadCourses(){
        this.$store.dispatch('courses/setCourses')
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