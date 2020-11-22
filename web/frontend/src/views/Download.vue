<template>
    <v-card width="600" class="mx-auto mt-5" outlined shaped tile elevation="3">
        <v-row align="center" justify="space-around">
            <v-img
                max-height="500"
                max-width="300"
                :src="video.videoInfo.video.cover"
            ></v-img>
        </v-row>
        <v-divider></v-divider>
        <v-card-title><h3 class="text-center">Video Information</h3></v-card-title>
        <v-divider></v-divider>
        <v-card-text>
            <p>{{video.videoInfo.video.description}}</p><br>
            <v-icon
                color="red"
                dark
                right
            >mdi-link</v-icon>: <a :href="video.videoInfo.video.URL">Tiktok Video Link</a><br>
            <v-icon
                color="red"
                dark
                right
            >mdi-clock-outline</v-icon>: {{new Date(video.videoInfo.video.createdTime*1000)}}<br>
            <v-icon
                color="red"
                dark
                right
            >mdi-heart-multiple</v-icon>: {{video.videoInfo.video.likes}}<br>
            <v-icon
                color="red"
                dark
                right
            > mdi-comment-processing</v-icon>: {{video.videoInfo.video.comments}}<br>
            <v-icon
                color="red"
                dark
                right
            > mdi-share-variant</v-icon>: {{video.videoInfo.video.shares}}<br>
            <v-icon
                color="red"
                dark
                right
            > mdi-play-circle</v-icon>: {{video.videoInfo.video.played}}<br>
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
        name: "Download",
        computed: {
            ...mapGetters({
                "video": "getVideo",
            })
        },
    }
</script>