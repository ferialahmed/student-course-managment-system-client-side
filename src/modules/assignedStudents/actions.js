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
            context.commit('setAssignedStudents', data);
        })
    },
    assignStudentToCourse(context, payload){
        fetch('https://localhost:5001/api/AssignStudent',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(res => {
            if(!res.ok){
                console.log(res);
                throw new Error(res.message || 'Failed to Assign student to course');
            }
            else{
                context.commit('assignStudentToCourse', payload);
            }
        })
    }
}