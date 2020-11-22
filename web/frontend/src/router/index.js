import Vue from "vue";
import VueRouter from "vue-router";
import store from "@/store/index";
import Home from "@/views/Home";
import Profile from "@/views/Profile";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/download",
    name: "Download",
        component: () =>
        import("@/views/Download"),
        beforeEnter: (to, from, next) => {
          if (store.getters.getVideo.fileName == "") {
            next('/');
          } else {
            next();
          }
        }
  },
  {
    path: "/profile",
    name: "Profile",
        component: () =>
        import("@/views/Profile"),
        // beforeEnter: (to, from, next) => {
        //   if (store.getters.isAuthenticated) {
        //     next('/');
        //   } else {
        //     next();
        //   }
        // }
  },
  {
    path: "*",
    beforeEnter: (to, from, next) => {
          window.location = "/"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;