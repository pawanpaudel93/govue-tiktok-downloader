import axios from 'axios';
import router from '@/router/index';

const video = {
  state: {
      video: {
        URL: "",
        fileName: "",
        Info: "",
        error: false,
        loading: false
      },
  },
  mutations: {
    'SET_VIDEO' (state, data) {
      state.video.fileName = data.fileName;
      state.video.error = data.error;
      state.video.Info = data.videoInfo ? JSON.parse(data.videoInfo):"";
    },
    'SET_VIDEO_URL' (state, videoURL) {
      state.video.URL = videoURL;
    },
    'SET_VIDEO_LOADING' (state, loading) {
      state.video.loading = loading;
    },
    'SET_VIDEO_ERROR' (state, error) {
      state.video.error = error;
    }
  },
  actions: {
    setVIdeo ({commit, state}) {
      axios.post('/api/v1/video', {
          URL: state.video.URL,
      })
        .then(res => {
          // console.log(res.data);
          commit('SET_VIDEO', res.data)
          state.video.loading = false;
          router.push({name: "DownloadVideo"})
        })
        .catch(error => {
          commit('SET_VIDEO', error.response.data)
          state.video.loading = false;
        })
    },
  },
  getters: {
    getVideo (state) {
      return state.video;
    },
  }
};

export default video