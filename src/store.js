import { createStore } from "vuex";
import courses from './modules/courses';
import students from './modules/students';
import assignedStudents from "./modules/assignedStudents";
const store = createStore({
    modules:{
        courses,
        students,
        assignedStudents
    }
})
export default store;