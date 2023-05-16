export default{
    setCourses(state, payload){
        state.courses = payload;
    },
    createCourse(state, payload){
        state.courses.push(payload);
    },
    setMessage(state){
        state.message = true;
    },
    clearMessage(state){
        state.message = false
    }
}