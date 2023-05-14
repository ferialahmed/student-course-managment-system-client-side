export default{
    setCourses(state, payload){
        state.courses = payload;
    },
    createCourse(state, payload){
        state.courses.push(payload);
    }
}