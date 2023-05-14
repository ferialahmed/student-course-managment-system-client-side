<template>
    <form @submit.prevent="assignStudent">
        
        <div class="form-control" >
            <label for="student">student</label>
            <select name="student">
                <option value="" >Please select one…</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
            </select>
        </div>
        <div class="form-control" >
            <label for="course">course</label>
            <select name="course">
                <option value="" >Please select one…</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
            </select>
        </div>
        <div class="form-control" >
            <label for="studentAge">student Age</label>
            <input
                type="number"
                id="studentAge"
                v-model.trim="studentAge"
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
methods:{
    assignStudent(){
        console.log('student assigned to course');
        this.$router.push('/registered');
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

</style>