<template>
    <v-app light>
        <v-toolbar class="cyan" dark>
            <v-toolbar-title center class="display-3">
                API Nexus
            </v-toolbar-title>
        </v-toolbar>
        <v-container row center>
            <v-flex col xs7>
                <cryptocurrency></cryptocurrency>
            </v-flex>
        </v-container>
        <v-footer fixed>
            <span>&copy; Created by Steven Myers. 2017</span>
        </v-footer>
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
