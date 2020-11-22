import Vue from "vue";
import Vuex from "vuex";
import video from "./video";
import profile from "./profile";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        profile,
        video
    }
})