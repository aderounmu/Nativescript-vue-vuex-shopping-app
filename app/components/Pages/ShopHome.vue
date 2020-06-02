<template>
    <ScrollView orientation="vertical">
        <StackLayout orientation="vertical" backgroundColor="White">
            <!--<Card :title="item.Title" :category="item.Category"
                :price="item.Price" :image="item.ImageCover"
                v-for="item in Items" v-bind:key="item.id" v-shadow="6"
                class="card" />-->
            <Card :item="item" class="card" v-shadow="6"
                v-for="item in Items" v-bind:key="item.id" />
        </StackLayout>
    </ScrollView>
</template>

<script>
    import Card from "~/./components/others/Card";
    export default {
        methods: {
        },

        components: {
            Card
        },
        data() {
            return {};
        },
        computed: {
            Items() {
                return this.$store.getters.listofitems;
            }
        }
    };
</script>

<style scoped>
    .card {
        margin: 20;
        width: 300;
        height: 400;
    }
</style>