export default {
async setCourses(context){
    const response = await fetch('https://localhost:5001/api/Courses');
    const data = await response.json();
    if(!response.ok){
        throw new Error(response.message || 'Can\'t get courses');
    }
    context.commit('setCourses', data);
},
createCourse(context, payload){
    const courses = context.getters.getCourses
    if(!courses.some(existingCourse => existingCourse.name === payload.name)){
        fetch('https://localhost:5001/api/Courses',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(payload)
        })
        .then(res => {
            if(!res.ok){
                throw new Error ('Can\'t create course')
            }
            else{
            context.commit('createCourse', payload)
        }
    })
}else{
    context.commit('setMessage');
    setTimeout( () => {
        context.commit('clearMessage')
    }, 1000)
}
}
}
