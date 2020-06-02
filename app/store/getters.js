export default {
    itemInCart: (state) => {
        return state.cart
    },
    countCart: (state) => {
        return state.cart.length
    },
    listofitems: (state) => {
        return state.items
    },
    loggedin: (state) => {
        return state.login.loggedIn
    }
}