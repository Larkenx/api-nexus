<template id="cryptocurrency">
    <v-card flat class="elevation-4">
        <v-card-title class="display-2 blue-grey darken-2" style="color: white;" primary-title>Cryptocurrency Ranking</v-card-title>
        <v-card-text> This API indexes the top 10 cryptocurrencies by market cap (how
            much the sum of all coins is collectively worth), and gives you an easy
            way to compare cryptocurrency performance and rank over the last week.
        </v-card-text>
        <v-card-text>
            <v-data-table
            loading
            hide-actions
            :headers="headers"
            :items="items"
            >
            <template slot="items" scope="props">
                <td class="text-xs-right">{{ props.item.rank }}</td>
                <td class="text-xs-left">
                    <img :src="getCoinImage(props.item.symbol)" :alt="props.item.symbol" style="width: 24px; height: 24px;"/>
                    {{ props.item.name }}
                </td>
                <td class="text-xs-left">{{props.item.symbol}}</td>
                <td class="text-xs-left">{{ props.item.price_usd | currency }}</td>
                <td class="text-xs-left" :style="getColor(props.item.percent_change_1h)">
                    <span v-if="props.item.percent_change_1h > 0">+</span>{{ props.item.percent_change_1h }}%
                </td>
                <td class="text-xs-left" :style="getColor(props.item.percent_change_24h)">
                    <span v-if="props.item.percent_change_24h > 0">+</span>{{ props.item.percent_change_24h }}%
                </td>
                <td class="text-xs-left" :style="getColor(props.item.percent_change_7d)">
                    <span v-if="props.item.percent_change_7d > 0">+</span>{{ props.item.percent_change_7d }}%
                </td>
                <td class="text-xs-left">{{ props.item.market_cap_usd | currency }}</td>
            </template>
        </v-data-table>
    </v-card-text>
</v-card>
</template>

<script>
/* import other components here */
const images_path = "../../public/cryptocoins/SVG/";
const data_api_uri = "https://api.coinmarketcap.com";
const update_interval = 1000 * 60;
import axios from 'axios'
export default {
    data() {
        return {
            headers : [
                {text: "Rank", value: "rank", align: "left"},
                {text : "Name", value : "name", align: "left"},
                {text : "Symbol", value : "symbol", align: "left"},
                {text : "Price (USD)", value : "price_usd" , align: "left"},
                {text: "1H", value : "percent_change_1h", align: "left"},
                {text: "1D", value : "percent_change_24h", align: "left"},
                {text: "1W", value : "percent_change_7d", align: "left"},
                {text: "Market Cap (USD)", value : "market_cap_usd", align: "left"},
            ],
            items : [],
            coinData : {},
        };
    },
    methods: {
        getCoins () {
            axios.get(data_api_uri + "/v1/ticker/?limit=10")
            .then((resp) => {
                this.items = resp.data;
            })
            .catch((err) => {
                console.log(err);
            });
        },
        getCoinImage (symbol) {
            return images_path + symbol + ".svg";
        },
        getColor(n) {
            if (n > 0) {
                return "color: green;"
            } else if (n < 1) {
                return "color: red;"
            }
        }
    },
    created () {
        this.getCoins();
        setInterval(() => {
            console.log("UPDATED!");
            this.getCoins();
        }, update_interval);
    },
    mounted () {

    }
}
</script>
<style>
#cryptocurrency {
    padding : 5px;
}
</style>
