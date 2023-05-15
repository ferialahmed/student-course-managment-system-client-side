export default{
    setAssignedStudents(state, payload){
        state.assignedStudents = payload
        console.log(state.assignedStudents)
    }
}