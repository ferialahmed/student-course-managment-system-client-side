export default{
    setAssignedStudents(context){
        
        fetch ('https://localhost:5001/api/AssignStudent')
        .then(res => {
            if (res.ok){
                return res.json();
            }else{
                throw new Error(res.message || 'Failed to get Assigned Students')
            }
        })
        .then(data =>{
            
            context.commit('setAssignedStudents', data)
        })
    }
}