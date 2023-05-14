export default {
setCourses(context){
    // const courses = [];
    fetch('https://localhost:5001/api/Courses')
    .then(response => {
        if(response.ok){
            return response.json();
        }
        else{
            throw new Error (response.message || 'failed to fetch')
        }
    }).then (data => {
        context.commit('setCourses', data);
    })
    
},
createCourse(context, payload){
    fetch('https://localhost:5001/api/Courses',{
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(res => {
        if(res.ok){
            context.commit('createCourse', payload)
        }
        else{
            throw new Error ('Can\'t create course')
        }
    })
}
}
