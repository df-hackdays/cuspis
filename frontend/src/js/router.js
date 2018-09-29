import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import AppSignin from "../components/signin.vue"
import AppContent from "../components/content.vue"
import StorageContent from "../components/storage-content.vue"
import TokenContent from "../components/token-content.vue"
import CourseCreate from "../components/course-create.vue"
import AttendCourse from "../components/attend-course.vue"

const router = new VueRouter({
    routes: [
        {name: "signin", path: "/signin", component: AppSignin},
        {name: "content", path: "/", component: AppContent},
        {name: "course", path: "/course", component: CourseCreate},
        {name: "attend", path: "/attend", component: AttendCourse},
        {name: "storage", path: "/storage", component: StorageContent},
        {name: "token", path: "/token", component: TokenContent},
        {path: "*", redirect: {name: "content"}}
    ]
})

export default router
