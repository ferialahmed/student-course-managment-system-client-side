<template>
    <form @submit.prevent="createStudent">
        <div  class="form-control">

            <label for="studentName">student Name</label>
            <input
                type="text"
                name="studentName"
                required
                v-model.trim="studentName"
            />    
            <label for="studentGender">student Gender</label>
            <select name="studentGender" v-model="studentGender" required>
                <option value="" >Please select one…</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
            </select>
            <label for="studentAge">student Age</label>
            <input
                type="number"
                name="studentAge"
                min="10"
                required
                v-model.trim="studentAge"
            /> 
            <base-button>Create</base-button>
        </div> 
    </form>
</template>
<script>
import baseButton from './baseButton.vue';
export default {
    components:{baseButton},
    data(){
        return{
        studentName: '',
        studentGender:'',
        studentAge: '',
        
    }
},

methods:{
    createStudent(){
        this.$store.dispatch('students/createStudent',{
            name: this.studentName,
            age: this.studentAge,
            gender: this.studentGender
        })
        console.log('student created');
        this.$router.push('/students');
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
input{
  display: block;
  width: 50%;
  border: 1px solid #ccc;
  font: inherit;
}
</style>