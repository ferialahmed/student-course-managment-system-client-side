import { createStore } from "vuex";
import courses from './modules/courses';
import students from './modules/students';
const store = createStore({
    modules:{
        courses,
        students
    }
})
export default store;