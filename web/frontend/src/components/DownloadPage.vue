<template>
    <v-card :width="width" class="mx-auto mt-5" outlined shaped tile elevation="6">
        <v-card-title>
            <p>{{ title }}</p>
        </v-card-title>
        <v-card-text>
            <v-form ref="form" lazy-validation>
                <v-text-field
                    v-model="link"
                    :label="textLabel"
                    :error-messages="URLErrors"
                    @blur="$v.URL.$touch()"
                    outlined
                    required
                    clearable
                />
            </v-form>
        </v-card-text>
        <v-divider></v-divider>
        <v-chip
            v-if="error && chip"
            class="ma-2"
            close
            color="red"
            text-color="white"
            @click:close="chip = false"
        >
            {{error}}
        </v-chip>
        <v-card-actions>
            <v-row align="center" justify="space-around">
                <v-btn
                    tile
                    :loading="loading"
                    color="success"
                    @click="submit"
                    class="ma-2"
                >
                    <v-icon dark left>
                     mdi-cloud-download
                    </v-icon>
                    Download
                </v-btn>
            </v-row>
        </v-card-actions>
    </v-card>
</template>
    
<script>
    import { validationMixin } from "vuelidate"
    import { required, url } from "vuelidate/lib/validators"

    export default {
        name: "DownloadPage",
        data() {
            return {
                chip: true,
            }
        },
        props: ["URL", "title", "textLabel", "error"],
        methods: {
            submit() {
                this.$v.$touch()
                if (this.$v.$dirty && !this.$v.$error) {
                    this.chip = true;
                    if (this.$route.name === "Profile") {
                        this.$store.commit("SET_PROFILE_LOADING", true);
                        this.$store.dispatch('setProfile');
                    } else {
                        this.$store.commit("SET_VIDEO_LOADING", true);
                        this.$store.dispatch('setVIdeo');
                    }
                }
                
            }
        },
        mixins: [validationMixin],
        validations: {
            URL: {
                required,
                url
            }
        },
        computed: {
            URLErrors() {
                const errors = []
                if (!this.$v.URL.$dirty) return errors
                !this.$v.URL.url && errors.push('Must be valid URL')
                !this.$v.URL.required && errors.push(`${this.textLabel} is required!!!`)
                return errors
            },
            link: {
                get() {
                    return this.URL;
                },
                set(newValue) {
                    if (this.$route.name === "Profile") {
                        this.$store.commit("SET_PROFILE_URL", newValue);
                    } else {
                        this.$store.commit("SET_VIDEO_URL", newValue);
                    }
                }
            },
            width() {
                switch (this.$vuetify.breakpoint.name) {
                    case 'xs': return 300
                    case 'sm': return 600
                    case 'md': return 700
                    case 'lg': return 800
                    case 'xl': return 1000
                }
            },
            loading: {
                get() {
                    if (this.$route.name === "Profile") {
                        return this.$store.getters.getProfile.loading;
                    } else {
                        return this.$store.getters.getVideo.loading;
                    }
                },
                set(newValue) {
                    if (this.$route.name === "Profile") {
                        this.$store.commit("SET_PROFILE_LOADING", newValue);
                    } else {
                        this.$store.commit("SET_VIDEO_LOADING", newValue);
                    }
                }
            }
        }
    }
</script>