import Vue from "vue"
import VueRouter from "vue-router"

Vue.use(VueRouter)

import AppSignin from "../components/signin.vue"
import AppContent from "../components/content.vue"
import StorageContent from "../components/storage-content.vue"
import TokenContent from "../components/token-content.vue"
import CourseCreate from "../components/course-create.vue"
import AttendCourse from "../components/attend-course.vue"
import CLCViewer from "../components/clc-viewer.vue"
import WowBoard from "../components/wow-board.vue"
import Store from "../components/store.vue"

const router = new VueRouter({
    routes: [
        {name: "home", path: "/home", component: AppSignin},
        {name: "content", path: "/", component: AppContent},
        {name: "course", path: "/course", component: CourseCreate},
        {name: "attend", path: "/attend", component: AttendCourse},
        {name: "clc", path: "/clc", component: CLCViewer},
        {name: "board", path: "/board", component: WowBoard},
        {name: "storage", path: "/storage", component: StorageContent},
        {name: "token", path: "/token", component: TokenContent},
        {name: "store", path:"/store", component: Store},
        {path: "*", redirect: {name: "content"}}
    ]        
})

export default router
