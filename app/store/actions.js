export default {
    increaseQ({ commit }, item) {
        commit('increaseQuantity', item);
    },
    decreaseQ({ commit }, item) {
        commit('decreaseQuantity', item);
    },
    addToCart({ commit }, item) {
        commit('addItemToCart', item)
    },
    removeI({ commit }, item) {
        commit('removeItemFromCart', item)
    },
    login({ commit }) {
        commit('loginUser')
    },
    logout({ commit }) {
        commit('logoutUser')
    }
}