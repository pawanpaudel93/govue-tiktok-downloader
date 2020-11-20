<template>
    <v-app-bar app color="indigo" dark>
      <div class="d-flex align-center">
          <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/tiktok.png"
          transition="scale-transition"
          width="60"
        />
        <v-toolbar-title>Downloader</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

</template>

<script>
export default {
    name: "NavBar",
};
</script>
