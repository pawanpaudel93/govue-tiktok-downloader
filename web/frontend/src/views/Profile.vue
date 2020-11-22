<template>
    <DownloadPage :URL="profile.URL" :title="title" :textLabel="textLabel"/>
</template>
    
<script>
    import DownloadPage from "@/components/DownloadPage"
    import {mapGetters} from "vuex"
    export default {
        name: "Profile",
        components: {
            DownloadPage,
        },
        data() {
            return {
                title: "Enter Tiktok user URL",
                textLabel: "Tiktok User URL"
            }
        },
        computed: {
            ...mapGetters({
                "profile": "getProfile"
            })
        }
    }
</script>