export default{
    async setStudents(context){
       const response =  await fetch('https://localhost:5001/api/Students');
       const data = await response.json();
       console.log(data);
       if(!response.ok){
           throw new Error (response.message || 'Can\'t fetch students');
       }
        context.commit('setStudents', data)
    },
    createStudent(context, payload){
        fetch('https://localhost:5001/api/Students',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(res => {
            if(res.ok){console.log(res)
                context.commit('createStudent', payload)
            }
            else{
                throw new Error('Can\'t create student')
            }
        })
        
    }
}