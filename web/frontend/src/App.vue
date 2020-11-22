<template>
  <v-app>
    <NavBar />
     <v-container fluid v-if="this.$route.name == 'Profile' || this.$route.name == 'Home'">
      <v-slide-y-transition mode="out-in">
        <v-layout column align-center>
          <h1 class="display-1">Tiktok video / Profile Picture downloader</h1>
          <p>
            You can download video/profile picture of tiktok users by entering the url of video/user respectively.
          </p>
          <p>
            For video, enter url like: <a href="https://www.tiktok.com/@berywambeatbox/video/6897238157025086721">https://www.tiktok.com/@berywambeatbox/video/6897238157025086721</a>
          </p>
          <p>
            For profile picture, enter url like: <a href="https://www.tiktok.com/@berywambeatbox">https://www.tiktok.com/@berywambeatbox</a>
          </p>
        </v-layout>
      </v-slide-y-transition>
    </v-container>
    <v-main>
       <router-view app></router-view>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    NavBar,
    Footer,
  },

  data: () => ({
    //
  })
};
</script>
