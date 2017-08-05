<template>
    <v-app light>
        <v-toolbar dark class="blue-grey darken-4">
            <v-toolbar-title center class="display-3">
                API Nexus
            </v-toolbar-title>
        </v-toolbar>
        <v-layout id="crpyto_container" row style="padding-top: 15px;">
            <v-flex col xs1></v-flex>
            <v-flex col xs10>
                <cryptocurrency></cryptocurrency>
            </v-flex>
            <v-flex col xs1></v-flex>
        </v-layout>
    </v-app>
</template>

<script>
    import cryptocurrency from "./components/Cryptocurrency.vue";
    export default {
        data () {
            return {
            }
        },
        components: {
            "cryptocurrency": cryptocurrency,
        },
    }
</script>

<style lang="stylus">
    @import './stylus/main'
</style>
