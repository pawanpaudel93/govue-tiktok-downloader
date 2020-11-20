<template>
    <v-card width="600" class="mx-auto mt-5" outlined shaped tile elevation="3">
        <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@manjuxettri07/video/6886732628280593666" data-video-id="6886732628280593666" style="max-width: 605px;min-width: 325px;" > <section> <a target="_blank" title="@manjuxettri07" href="https://www.tiktok.com/@manjuxettri07">@manjuxettri07</a></section> </blockquote>
        <v-divider></v-divider>
        <v-card-actions>
            <v-row align="center" justify="space-around">
                <v-btn block tile color="success">
                    Download Video
                </v-btn>
            </v-row>
        </v-card-actions>
    </v-card>
</template>
    
<script>

    export default {
        name: "Download",
        data() {
            return {
                videoURL: "",
                downloadURL: ""
            }
        }
    }
</script>