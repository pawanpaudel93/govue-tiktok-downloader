<template>
    <DownloadPage :URL="URL" :title="title" :textLabel="textLabel"/>
</template>
    
<script>
    import DownloadPage from "@/components/DownloadPage"
    export default {
        name: "Profile",
        components: {
            DownloadPage,
        },
        data() {
            return {
                URL: "",
                title: "Enter Tiktok user URL",
                textLabel: "Tiktok User URL"
            }
        },
    }
</script>