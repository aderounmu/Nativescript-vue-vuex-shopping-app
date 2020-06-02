import Vue from "nativescript-vue";
import Vuex from './vuex'
import Home from "./components/Home";

//Vuex importations
import mutations from '~/store/mutations.js'
import state from '~/store/state.js'
import actions from '~/store/actions.js'
import getters from '~/store/getters.js'

//Vue shadow for cards
import NSVueShadow from './nativescript-vue-shadow'

Vue.config.silent = false;

Vue.use(Vuex);
Vue.use(NSVueShadow);
const store = new Vuex.Store({
    state: state,
    mutations: mutations,
    actions: actions,
    getters: getters
})



new Vue({
    store,
    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
