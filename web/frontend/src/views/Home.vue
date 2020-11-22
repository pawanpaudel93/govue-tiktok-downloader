<template>
    <DownloadPage :URL="video.URL" :title="title" :textLabel="textLabel" :error="video.error"/>
</template>
    
<script>
    import DownloadPage from "@/components/DownloadPage";
    import { mapGetters } from "vuex";
    export default {
        name: "Home",
        components: {
            DownloadPage,
        },
        data() {
            return {
                title: "Enter Tiktok video URL to download",
                textLabel: "Tiktok Video URL"
            }
        },
        computed: {
            ...mapGetters({
                "video": "getVideo",
            })
        },
        mounted() {
            this.$store.commit("SET_VIDEO_URL", "")
            this.$store.commit("SET_VIDEO_ERROR", false)
        },
    }
</script>