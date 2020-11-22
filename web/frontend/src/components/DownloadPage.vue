<template>
    <v-card width="800" class="mx-auto mt-5" outlined shaped tile elevation="6">
        <v-card-title>
            <p>{{ title }}</p>
        </v-card-title>
        <v-card-text>
            <v-form ref="form" lazy-validation>
                <v-text-field
                    v-model="link"
                    :label="textLabel"
                    required
                    :error-messages="URLErrors"
                    @blur="$v.URL.$touch()"
                />
            </v-form>
        </v-card-text>
        <v-divider></v-divider>
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
                loading: false,
            }
        },
        props: ["URL", "title", "textLabel"],
        methods: {
            submit() {
                this.$v.$touch()
                if (this.$v.$dirty && !this.$v.$error) {
                    this.loading = true;
                    this.$store.dispatch('setVIdeo');
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
                    this.$store.commit("SET_VIDEO_URL", newValue);
                }
            }
        }
    }
</script>