import axios from 'axios';
import router from '@/router/index';

const profile = {
  state: {
      profile: {
        URL: "",
        Info: "",
        error: false,
        loading: false
      },
  },
  mutations: {
    'SET_PROFILE' (state, data) {
      state.profile.error = data.error;
      state.profile.Info = data.profileInfo ? JSON.parse(data.profileInfo): "";
    },
    'SET_PROFILE_URL' (state, profileURL) {
      state.profile.URL = profileURL;
    },
    'SET_PROFILE_LOADING' (state, loading) {
      state.profile.loading = loading;
    },
    'SET_PROFILE_ERROR' (state, error) {
      state.profile.error = error;
    }
  },
  actions: {
    setProfile ({commit, state}) {
        axios.post('/api/v1/photo', {
            URL: state.profile.URL,
        })
          .then(res => {
            commit('SET_PROFILE', res.data)
            state.profile.loading = false;
            router.push({name: "DownloadPhoto"})
          })
          .catch(error => {
            commit('SET_PROFILE', error.response.data)
            state.profile.loading = false;
          })
      },
  },
  getters: {
    getProfile (state) {
      return state.profile;
    },
  }
};

export default profile