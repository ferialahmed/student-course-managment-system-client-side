import { createApp } from 'vue'
import { createRouter, createWebHistory} from 'vue-router'
import AllCourses from './pages/courses/AllCourses.vue'
import CreateCourse from './pages/courses/CreateCourse.vue'
import AllStudents from './pages/students/AllStudents';
import CreateStudent from './pages/students/CreateStudent.vue';
import AssignedStudents from './pages/registeration/AssignedStudents.vue';
import AssignStudent from './pages/registeration/AssignStudent.vue'
import App from './App.vue'
import store from './store';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        {path: '/', redirect: '/courses'},
        {path: '/courses',  component: AllCourses},
        {
            path: '/courses/create', component: CreateCourse
        },
        {path: '/students',  component: AllStudents},
        {
            path: '/students/create', component: CreateStudent
        },
        {path: '/registered',  component: AssignedStudents},
        {
            path: '/assign', component: AssignStudent
        },
    ]
})
const app = createApp(App);
app.use(router);
app.use(store);
app.mount('#app')
