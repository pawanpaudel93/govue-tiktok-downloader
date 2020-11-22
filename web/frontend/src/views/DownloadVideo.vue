<template>
    <v-card width="600" class="mx-auto mt-5" outlined shaped tile elevation="3">
        <v-row align="center" justify="space-around">
            <v-img
                max-height="500"
                max-width="300"
                :src="video.Info.video.cover"
            ></v-img>
        </v-row>
        <v-divider></v-divider>
        <v-card-title><h3 class="text-center">Video Information</h3></v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <p>{{video.Info.video.description}}</p><br>
            <v-icon
                color="indigo"
                dark
                right
            >mdi-link</v-icon> <a :href="video.URL">Tiktok Video Link</a><br>
            <v-icon
                color="indigo"
                dark
                right
            >mdi-clock-outline</v-icon> {{new Date(video.Info.video.createdTime*1000)}}<br>
            <v-icon
                color="red"
                dark
                right
            >mdi-heart-multiple</v-icon> {{video.Info.video.likes}}<br>
            <v-icon
                color="indigo"
                dark
                right
            > mdi-comment-processing</v-icon> {{video.Info.video.comments}}<br>
            <v-icon
                color="indigo"
                dark
                right
            > mdi-share-variant</v-icon> {{video.Info.video.shares}}<br>
            <v-icon
                color="indigo"
                dark
                right
            > mdi-play-circle</v-icon> {{video.Info.video.played}}<br>
        </v-card-text>
        <v-card-actions>
            <v-row align="center" justify="space-around">
                <v-btn block tile color="success" :href="'/api/v1/video/'+video.fileName">
                    Download Video
                </v-btn>
            </v-row>
        </v-card-actions>
    </v-card>
</template>
    
<script>
    import { mapGetters } from 'vuex';
    export default {
        name: "DownloadVideo",
        computed: {
            ...mapGetters({
                "video": "getVideo",
            })
        },
    }
</script>