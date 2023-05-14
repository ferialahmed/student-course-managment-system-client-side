import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

const students = {
    namespaced:true,
    state(){
        return{
            students: []
        }
    },
    actions,
    mutations,
    getters
}
export default students;