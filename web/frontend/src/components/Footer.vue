<template>
    <v-card height="150">
        <v-footer
            absolute
            class="font-weight-medium"
            color="indigo"
        >
        <v-col
            class="py-4 text-center white--text"
            cols="12"
        >
            &copy;{{ new Date().getFullYear() }} — <strong>TikTok Downloader</strong>
        </v-col>
        </v-footer>
    </v-card>
</template>

<script>
export default {
    name: "Footer"
}
</script>