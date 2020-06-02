<template>
    <Page actionBarHidden="true" @loaded="login">
        <StackLayout orientation="vertical" width="210" height="210"
            backgroundColor="#8181EA">
            <FlexboxLayout>
                <Label class="login_item logo" text="Wellcomm" />
            </FlexboxLayout>
        </StackLayout>
    </Page>
</template>

<script>
    import Login from "./Login";
    import Shop from "./Shop";

    export default {
        data() {
            return {
                //Userin: false,
                //Userin : true
            };
        },
        methods: {
            login() {
                const goPage = this.$store.getters.loggedin ? Shop : Login;
                this.$navigateTo(goPage, {
                    clearHistory: true
                });
            }
        }
    };
</script>

<style scoped>
    .logo {
        color: white;
        horizontal-align: center;
        vertical-align: center;
    }

    FlexboxLayout {
        justify-content: center;
        align-items: center;
    }
</style>