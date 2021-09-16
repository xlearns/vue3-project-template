import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router"
import Main from "../views/Main.vue"

const routes: Array<RouteRecordRaw> = [
  //首页
  {
    path: "/",
    name: "main",
    component: Main,
    meta:{isPublic:true}
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !sessionStorage.getItem("token")) {
    sessionStorage.clear()
    return next("/login")
  } else {
    next()
  }
})
export default router
