<template>
    <v-card width="600" class="mx-auto mt-5" outlined shaped tile elevation="3">
        <v-row align="center" justify="space-around"><b>{{profile.Info.user.nickname}}</b></v-row>
        <v-divider></v-divider>
        <v-row align="center" justify="space-around">
            <v-avatar
                size="300"
            >
                <v-img
                    max-height="500"
                    max-width="300"
                    :src="profile.Info.user.avatarLarger"
                ></v-img>
            </v-avatar>
        </v-row>
        <v-divider></v-divider>
        <v-card-title>{{profile.Info.user.signature}}</v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <v-icon
                color="indigo"
                dark
                right
            >mdi-account</v-icon> <a :href="profile.Info.userMetaStats.canonicalHref">@{{profile.Info.user.uniqueId}}</a><br>
            <v-icon
                color="indigo"
                dark
                right
            >mdi-check-decagram</v-icon> {{profile.Info.user.verified?"Verified":"Not Verified"}}<br>
            <v-icon
                color="indigo"
                dark
                right
            >mdi-account-multiple</v-icon>Followers: {{profile.Info.userStats.followerCount}}<br>
            <v-icon
                color="indigo"
                dark
                right
            >mdi-account-multiple</v-icon>Following: {{profile.Info.userStats.followingCount}}<br>
            <v-icon
                color="red"
                dark
                right
            >mdi-heart-multiple</v-icon> {{profile.Info.userStats.heartCount}}<br>
            <v-icon
                color="red"
                dark
                right
            >mdi-video-check</v-icon> {{profile.Info.userStats.videoCount}}
            
        </v-card-text>
        <v-card-actions>
            <v-row align="center" justify="space-around">
                <v-btn block tile color="success" :href="profile.Info.user.avatarLarger">
                    Download Profile Picture(Large)
                </v-btn>
                <br><br>
                <v-btn block tile color="success" :href="profile.Info.user.avatarLarger">
                    Download Profile Picture(Medium)
                </v-btn>
            </v-row>
        </v-card-actions>
    </v-card>
</template>
    
<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "DownloadPhoto",
        computed: {
            ...mapGetters({
                "profile": "getProfile",
            })
        },
    }
</script>