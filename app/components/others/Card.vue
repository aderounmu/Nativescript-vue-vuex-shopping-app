<template>
    <AbsoluteLayout class="card-container">
        <Image :src="item.imageCover" stretch="aspectFill" />
        <Label :text="item.category" class="category" top="10" left="20" />
        <Label :text="item.title" class=" title" top="55" left="20" />
        <Label :text="priceinString" class="price" top="320 " left="20" />
        <Button text="+" @tap="addToCart" top="320" left="220" />
    </AbsoluteLayout>
</template>

<script>
    export default {
        name: "Card",
        methods: {
            addToCart() {
                this.$store.dispatch("addToCart", this.item);
                console.log(this.$store.getters.countCart);
            }
        },

        //props: ["category", "title", "image", "price"],
         props: {
                item: {
                    type: Object,
                    required: true
                },
            },
        data() {
            return {};
        },
        computed: {
            priceinString: function() {
                return "$" + this.item.price.toString();
            }
        }
    };
</script>

<style scoped>
    .card-container {
        border-radius: 40;
        background-color: #fcfcfc;
    }

    .category {
        font-size: 28
    }

    .title {
        font-size: 25
    }

    .price {
        font-size: 23;
        color: #8181EA
    }

    Image {
        height: 400;
        horizontal-align: center;
    }

    Button {
        background-color: #8181EA;
        border-radius: 100;
        font-size: 32;
        width: 45;
        height: 45;
        color: white;
        text-align: center;
    }
</style>