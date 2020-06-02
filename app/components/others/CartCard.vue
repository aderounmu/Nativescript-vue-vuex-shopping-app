<template>
    <!-- using labels instead of buttons because buttons are clicking responsing in components mad by veux -->
    <GridLayout columns="120, *" class="card-container">
        <StackLayout orientation="vertical" backgroundColor="white" col="0">
            <Image :src="item.image" stretch="aspectFit" />
            <Image @tap="removeItem" class="cancel"
                src="~/./Assets/Icons/cancel@3x.png" />
        </StackLayout>
        <StackLayout col="1" orientation="vertical">
            <Label :text="item.category" class="category" />
            <Label :text="item.title" class="title" />
            <Label :text="quantityinString" class="title" />
            <Label :text="priceinString" class="price" />
            <!--<Button @tap="increaseQuantity" class=" Button Button_add"
                text="+" />
            <Button @tap="decreaseQuantity" class="Button Button_delete"
                text="-" />-->
            <Label @tap="increaseQuantity"
                class=" Button button-label Button_add" text="+" />
            <Label @tap="decreaseQuantity"
                class="Button button-label Button_delete" text="-" />
        </StackLayout>
    </GridLayout>
</template>

<script>
    const platform = require("tns-core-modules/platform");
    const frame = require("tns-core-modules/ui/frame");
    const page = require("tns-core-modules/ui/page");

    export default {
        name: "CartCard",
        methods: {
            increaseQuantity(args) {
                const button = args.object;
                this.$store.dispatch("increaseQ", this.item);
                console.log(this.item.quantity);
                console.log(1);
            },
            testfunction(args) {
                const button = args.object;
                console.log("this is it");
            },
            decreaseQuantity() {
                this.$store.dispatch("decreaseQ", this.item);
                console.log(this.item.title);
            },
            removeItem() {
                this.$store.dispatch("removeI", this.item);
            }
        },
        //props: ["category", "title", "image", "price", "quantity"],
        props: {
            item: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                CancelIcon: platform.isIOS ?
                    "~/./Assets/Icons/cancel@3x.png " : " "
            };
        },
        computed: {
            priceinString: function() {
                let priceTotal = this.item.price * this.item.quantity;
                return "$" + priceTotal.toString();
            },
            quantityinString: function() {
                return this.item.quantity.toString();
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
        height: 100;
    }

    .Button {
        background-color: #8181EA;
        color: white;
        text-align: center;
        margin: 2 20
    }

    .button-label{

      padding: 5 0

    } 
    .cancel {
        width: 40;
    }

    .Button_add {
        background-color: green
    }

    .Button_delete {
        background-color: red;
    }
</style>