import axios from 'axios';
import router from '@/router/index';

const video = {
  state: {
      video: {
        URL: "",
        fileName: "",
        Info: "",
      },
      error: false
  },
  mutations: {
    'SET_VIDEO' (state, data) {
      state.video.fileName = data.fileName;
      state.error = data.error;
      state.video.Info = JSON.parse(data.videoInfo);
    },
    'SET_VIDEO_URL' (state, videoURL) {
      state.video.URL = videoURL;
    }
  },
  actions: {
    setVIdeo ({commit, state}) {
      axios.post('/api/v1/video', {
          URL: state.video.URL,
      })
        .then(res => {
            console.log(res.data);
          commit('SET_VIDEO', res.data)
          router.push({name: "DownloadVideo"})
        })
        .catch(error => {
          console.log(error)
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