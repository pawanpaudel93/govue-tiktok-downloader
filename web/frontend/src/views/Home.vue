<template>
    <DownloadPage :URL="URL" :title="title" :textLabel="textLabel"/>
</template>
    
<script>
    import DownloadPage from "@/components/DownloadPage"
    export default {
        name: "Home",
        components: {
            DownloadPage,
        },
        data() {
            return {
                URL: "",
                title: "Enter Tiktok video URL to download",
                textLabel: "Tiktok Video URL"
            }
        },
    }
</script>