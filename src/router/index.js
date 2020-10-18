import Vue from "vue"
import VueRouter from "vue-router"
import Analytics from "../views/Analytics.vue"
import Auth from "../views/Auth.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Root",
    component: Auth,
  },
  {
    path: "/analytics",
    name: "Analytics",
    component: Analytics,
    beforeEnter: (to, from, next) => {
      let cached = localStorage.getItem("leadhit-site-id")
      if (cached === null) {
        next({ path: "/" })
      } else next()
    },
  },
]

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes,
})

export default router
