<template>
    <Page @loaded="pageOnLoad">
        <ActionBar title="test" class="action-container">
            <GridLayout columns="auto, *, auto">
                <Label horizontalAlignment="left" :text="activetabName"
                    col="0" class="action-item1"></Label>
                <Label horizontalAlignment="right" text="logout" col="1"
                    class="action-item2" @tap="logout"></Label>
            </GridLayout>
        </ActionBar>
        <TabView id="myTab" androidTabsPosition="bottom" class="tab"
            :selectedIndex="activeTabIndex"
            @selectedIndexChange="onTabChange">
            <TabViewItem title="Home" :iconSource="HomeIcon">
                <ShopHome />
            </TabViewItem>
            <TabViewItem title="Search" :iconSource="SearchIcon">
                <ShopSearch />
            </TabViewItem>
            <TabViewItem title="Cart" :iconSource="CartIcon">
                <ShopCart />
            </TabViewItem>
            <TabViewItem title="Settings" :iconSource="SettingsIcon">
                <ShopSettings />
            </TabViewItem>
        </TabView>
    </Page>
</template>

<script>
    const platform = require("tns-core-modules/platform");
    const frame = require("tns-core-modules/ui/frame");
    const page = require("tns-core-modules/ui/page");
    const getViewById = require("tns-core-modules/ui/core/view-base/")
        .getViewById;

    import ShopHome from "~/components/Pages/ShopHome";
    import ShopSearch from "~/components/Pages/ShopSearch";
    import ShopCart from "~/components/Pages/ShopCart";
    import ShopSettings from "~/components/Pages/ShopSettings";

    import Home from "./Home";
    import Login from "./Login";
    export default {
        components: {
            ShopHome,
            ShopSearch,
            ShopCart,
            ShopSettings
        },
        data() {
            //for andriod make sure image source or icon source is not an empty string
            return {
                HomeIcon: platform.isIOS ? "~/./Assets/Icons/home@3x.png " :
                    "",
                SearchIcon: platform.isIOS ?
                    "~/./Assets/Icons/search@3x.png" : "",
                CartIcon: platform.isIOS ?
                    "~/./Assets/Icons/shoppingbag@3x.png" :
                    "",
                SettingsIcon: platform.isIOS ?
                    "~/./Assets/Icons/settings@3x.png" :
                    "",
                activeTabIndex: 0,
                tabName: ["Home", "Search", "Cart", "Settings"]
            };
        },
        methods: {
            pageOnLoad(args) {
                if (platform.isIOS) {
                    const navBar = frame.topmost().ios.controller
                        .navigationBar;
                    navBar.barStyle =
                        UIBarStyle
                        .UIBarStyleBlack; /* navBar.translucent = false; navBar.barStyle = 0; */
                    IQKeyboardManager.sharedManager().enableAutoToolbar =
                        false;
                    let cartNumber = this.numberInCart.toString();
                    var page = args.object;
                    var tabView1 = getViewById(page, "myTab");
                    tabView1.ios.tabBar.items[2].badgeValue = cartNumber;
                }
            },
            onTabChange(tab) {
                this.activeTabIndex = tab.value;
            },
            logout() {
                this.$store.dispatch("logout");
                this.$navigateTo(Login, {
                    clearHistory: true
                });
            }
        },
        computed: {
            numberInCart: function() {
                return this.$store.getters.countCart;
            },
            activetabName: function() {
                return this.tabName[this.activeTabIndex];
            }
        }
    };
</script>

<style scoped>
    .tab {
        selected-tab-text-color: #8181EA;
        tab-background-color: white;
    }

    .action-item1 {
        font-size: 25
    }

    .action-item2 {
        font-size: 18
    }

    .action-container {
        padding: 10 30;
        background-color: #8181EA;
    }
</style>