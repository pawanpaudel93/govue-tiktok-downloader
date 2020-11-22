import axios from 'axios';
import router from '@/router/index';

const profile = {
  state: {
      profile: {
        URL: "",
        Info: "",
      },
      error: false
  },
  mutations: {
    'SET_PROFILE' (state, data) {
      state.error = data.error;
      state.profile.Info = JSON.parse(data.profileInfo);
    },
    'SET_PROFILE_URL' (state, profileURL) {
        state.profile.URL = profileURL;
      }
  },
  actions: {
    setProfile ({commit, state}) {
        axios.post('/api/v1/photo', {
            URL: state.profile.URL,
        })
          .then(res => {
              console.log(res.data.profileInfo);
            commit('SET_PROFILE', res.data)
            console.log(state.profile)
            router.push({name: "DownloadPhoto"})
          })
          .catch(error => {
            console.log(error)
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