export default{
    async setStudents(context){
        await fetch('https://localhost:5001/api/Students')
        .then(res => {
            if (res.ok){
                return res.json()
            }
            else{
                throw new Error (res.message || 'Can\'t fetch students');
            }
        })
        .then(data => context.commit('setStudents',data))
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