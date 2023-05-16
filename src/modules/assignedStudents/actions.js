export default{
    async setAssignedStudents(context){
        
        const response = await fetch ('https://localhost:5001/api/AssignStudent');
        const data = await response.json();
        console.log(response)
        if(!response.ok){
            throw new Error(response.message || 'Failed to get Assigned Students')
        }
        context.commit('setAssignedStudents', data);
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