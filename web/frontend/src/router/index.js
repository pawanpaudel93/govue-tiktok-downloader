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
    name: "DownloadVideo",
        component: () =>
        import("@/views/DownloadVideo"),
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
  },
  {
    path: "/download/profile-picture",
    name: "DownloadPhoto",
        component: () =>
        import("@/views/DownloadPhoto"),
        beforeEnter: (to, from, next) => {
          if (store.getters.getProfile.Info == "") {
            next('/');
          } else {
            next();
          }
        }
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