<template>
    <DownloadPage :URL="video.URL" :title="title" :textLabel="textLabel"/>
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
    }
</script>