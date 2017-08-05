<template id="cryptocurrency">
    <v-card flat class="elevation-4">
        <v-card-title class="display-2 cyan" style="color: white;" primary-title>Cryptocurrency Ranking</v-card-title>
        <v-card-text> This API indexes the top 10 cryptocurrencies by market cap (how
            much the sum of all coins is collectively worth), and gives you an easy
            way to compare cryptocurrency performance and rank over the last week.</v-card-text>
            <v-card-text>
                <v-data-table
                hide-actions
                :headers="headers"
                :items="items"
                >
                <template slot="items" scope="props">
                    <td>{{ props.item.rank }}</td>
                    <td class="text-xs-left">{{ props.item.name }}</td>
                    <td class="text-xs-left">{{ props.item.symbol }}</td>
                    <td class="text-xs-left">{{ props.item.price_usd }}</td>
                    <td class="text-xs-left">{{ props.item.percent_change_1h }}</td>
                    <td class="text-xs-left">{{ props.item.percent_change_24h }}</td>
                    <td class="text-xs-left">{{ props.item.percent_change_7d }}</td>
                    <td class="text-xs-left">{{ props.item.market_cap_usd }}</td>
                </template>
            </v-data-table>
        </v-card-text>
    </v-card>
</template>

<script>
/* import other components here */
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
            items : [
                {
                    "id": "bitcoin",
                    "name": "Bitcoin",
                    "symbol": "BTC",
                    "rank": "1",
                    "price_usd": "2747.54",
                    "price_btc": "1.0",
                    "24h_volume_usd": "2242640000.0",
                    "market_cap_usd": "45223373666.0",
                    "available_supply": "16459587.0",
                    "total_supply": "16459587.0",
                    "percent_change_1h": "-2.83",
                    "percent_change_24h": "19.78",
                    "percent_change_7d": "17.2",
                    "last_updated": "1500596647"
                }
            ],
        };
    },
    methods: {},
}
</script>
<style>
    #cryptocurrency {
        padding : 5px;
    }
</style>
