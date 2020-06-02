<template>
    <Page actionBarHidden="true" @loaded="pageOnLoad">
        <ActionBar title=" " flat="true" height="
        0" opacity="0" />
        <StackLayout orientation="vertical" horizontalAlignment="center"
            class="container">
            <StackLayout orientation="vertical">
                <AbsoluteLayout class="image-container">
                    <Image src="~/Assets/background.png"
                        iosOverflowSafeArea="true" class="Login-banner"
                        stretch="aspectFill" />
                    <Label class="login_item logo" text="Wellcomm" top="30" />
                    <Label class="login_item Sign_in--label" text="Sign In"
                        top="80" />
                </AbsoluteLayout>
            </StackLayout>
            <StackLayout orientation="vertical" class="login-container">
                <Label class="login_item" text="Email" />
                <TextField class="login_item login-input" v-model="Email"
                    hint="aderounmubamgbose@gmail.com" />
                <Label class="login_item" text="Password" />
                <TextField class="login_item login-input" v-model="Password"
                    hint="*************" secure="true" />
                <Label class="login_item Forgot" text="Forgot Password ?" />
                <Button class="login_item Login_Button" text="Login"
                    @tap="login()" />
            </StackLayout>
        </StackLayout>
    </Page>
</template>

<script>
    import Home from "./Home";
    import Shop from "./Shop";
    const platform = require("tns-core-modules/platform");
    const frame = require("tns-core-modules/ui/frame");
    const page = require("tns-core-modules/ui/page");

    export default {
        methods: {
            pageOnLoad() {
                if (platform.isIOS) {
                    //page.statusBarStyleProperty = dark;
                    const navBar = frame.Frame.topmost().ios.controller
                        .navigationBar;
                    navBar.barStyle = 1;
                    navBar.isTranslucent = true;

                    /*  navBar.barStyle = 0; */
                    IQKeyboardManager.sharedManager().enableAutoToolbar =
                        false;
                }
            },
            login() {
                this.$store.dispatch("login");
                this.$navigateTo(Shop, {
                    clearHistory: true
                });
            }
        },

        data() {
            return {
                Email: "",
                Password: "",
                Login: false
            };
        }
    };
</script>

<style scoped>
    .home-panel {
        vertical-align: center;
        font-size: 20;
        margin: 15;
    }

    .description-label {
        margin-bottom: 15;
    }

    .Login-banner {
        height: 350;

    }

    .action-bar {
        background-color: #8181EA;
        border-width: 1;
        border-color: transparent;
    }

    .login_item {
        margin: 5 50
    }

    .Sign_in--label {
        font-size: 50;
        color: white;
    }

    .logo {
        color: white;
    }

    label {
        font-size: 16;
    }

    .login-input {
        border-bottom-color: #8181EA;
        border-bottom-width: 2;
        padding-bottom: 5;
        color: #EDEDED
    }

    .Forgot {
        horizontal-align: right;
        font-size: 12;
        margin-top: 10;
        margin-bottom: 10;
    }

    .Login_Button {
        background-color: #8181EA;
        color: white;
        width: 200;
        height: 38;
        font-size: 16
    }

    .content {
        height: 600
    }

    .container {
        background-color: #8181EA;
    }

    .login-container {
        background-color: white;
        height: 700px
    }
</style>