import actions from './actions.js';
import mutations  from './mutations.js';
import getters from './getters.js';

const courses = {
    namespaced: true,
    state(){
        return{
            courses: [],
            message: ''
        }
    },
    mutations,
    actions,
    getters
}
export default courses;