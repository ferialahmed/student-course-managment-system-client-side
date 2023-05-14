export default{
    setStudents(state, payload){
        state.students = payload;
    },
    createStudent(state, payload){
        state.students.push(payload);
    }
}