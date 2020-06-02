<template>
    <ScrollView orientation="vertical">
        <StackLayout orientation="vertical">
            <!--<CartCard :title="item.title" :category="item.category"
		            :price="item.price" :quantity="item.quantity" :image="item.image"
		            class="cardCart" v-shadow="6" v-for="item in Items"
		            v-bind:key="item.id" />-->
            <CartCard :item="item" class="cardCart" v-shadow="6"
                v-for="item in Items" v-bind:key="item.id" />
            <Button text="Button" @tap="onButtonTap" />
        </StackLayout>
    </ScrollView>
</template>

<script>
    import CartCard from "../others/CartCard";
    export default {
        methods: {
            onButtonTap() {
             let item 
             for (item of this.Items){
				 this.$store.dispatch("increaseQ", item);
                 console.log(item.quantity);

             }
            }
        },

        components: {
            CartCard
        },
        data() {
            return {};
        },
        computed: {
            Items() {
                return this.$store.getters.itemInCart;
            }
        }
    };
</script>

<style scoped>
    .cardCart {
        margin: 20;
        width: 300;
        height: 200;
    }
</style>