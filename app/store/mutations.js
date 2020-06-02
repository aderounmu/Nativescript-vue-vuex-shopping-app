export default {
    increaseQuantity(state, item) {
        let updateItem = state.cart.find(i => i.id == item.id);
        console.log(updateItem.quantity);
        updateItem.quantity = updateItem.quantity + 1;
    },
    decreaseQuantity(state, item) {
        let updateItem = state.cart.find(element => element.id == item.id)
        updateItem.quantity = updateItem.quantity - 1;
        if (updateItem.quantity <= 0) {
            updateItem.quantity = 0;
        }
        //Object.assign(itemToUpdate, item)
    },
    addItemToCart(state, item) {
        if (state.cart.find(element => element.id == item.id)) {
            console.log('Item in Cart');
        } else {
            let itemToCart = state.items.find(element => element.id == item.id);
            let newItemTocart = Object.assign({}, itemToCart, { quantity: 1 });
            state.cart.push(newItemTocart);
        }
    },
    removeItemFromCart(state, item) {
        let found = state.cart.find(element => element.id == item.id)
        let index = state.cart.indexOf(found)
        if (found) {
            state.cart.splice(index, 1);
        } else {
            console.log('Item not in Cart');
        }
    },
    loginUser(state) {
        if (!state.login.loggedIn) {
            if (state.login.password == '1234567') {
                state.login.loggedIn = true
            } else {
                state.login.loggedIn = false
            }
        } else {
            state.login.loggedIn = true
        }
    },
    loginUser(state) {
        if (!state.login.loggedIn) {
            if (state.login.password == '1234567') {
                state.login.loggedIn = true
            } else {
                state.login.loggedIn = false
            }
        } else {
            state.login.loggedIn = true
        }
    },
    logoutUser(state) {
        if (state.login.loggedIn) {
            state.login.loggedIn = false
        } else {
            state.login.loggedIn = false
        }
    }
}