import actions from './actions';
import mutations from './mutations';
import getters from './getters';

const assignedStudents = {
    namespaced: true,
    state(){
        return{
            assignedStudents: []
        }
    },
    mutations,
    actions,
    getters
}
export default assignedStudents;