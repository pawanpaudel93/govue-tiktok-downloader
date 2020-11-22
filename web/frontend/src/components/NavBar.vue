<template>
    <v-layout row justify-center>
      <v-toolbar dark color="indigo darken-1" class="hidden-xs-and-down">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/tiktok.png"
          transition="scale-transition"
          width="60"
        />
        <v-toolbar-title>Tiktok Downloader</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
         <v-btn
           v-for="item in nav"
           :key="item.icon"
           :to="item.to"
           text
         >{{ item.text }}</v-btn>
        </v-toolbar-items>
      </v-toolbar>
      
      <v-toolbar dark color="indigo darken-3" class="hidden-sm-and-up">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="@/assets/tiktok.png"
          transition="scale-transition"
          width="40"
        />
        <v-toolbar-title>Tiktok Downloader</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click="dialog=true"></v-app-bar-nav-icon> 

        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
          <v-card>
            <v-toolbar dark color="indigo darken-2">
                <v-img
                    alt="Vuetify Logo"
                    class="shrink mr-2"
                    contain
                    src="@/assets/tiktok.png"
                    transition="scale-transition"
                    width="40"
                />
              <v-toolbar-title>Tiktok Downloader</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon @click.native="dialog = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
            </v-toolbar>

            <v-list>
              <v-list-item
                v-for="(item, index) in nav"
                :key="index"
                :to="item.to"
                @click="dialog=false"
              >
                <v-list-item-action>
                  <v-icon v-if="item.icon">mdi-{{item.icon}}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
        </v-dialog>

      </v-toolbar>
    </v-layout>
</template>

<script>
export default {
    name: "NavBar",
    data() {
      return {
        dialog: false,
        nav: [
          {
            icon: 'home',
            text: 'Video Download',
            to: "/",
          },
          {
            icon: 'account-circle',
            text: 'Profile Picture Download',
            to: "/profile",
          },
        ]
      }
    }
};
</script>
