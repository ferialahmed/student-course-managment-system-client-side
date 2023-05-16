export default{
    setAssignedStudents(state, payload){
        state.assignedStudents = payload
    },
    assignStudentToCourse(state, payload){
        state.assignedStudents.push(payload)
    }
}