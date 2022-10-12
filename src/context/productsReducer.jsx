
const sumCartItems = (cart) => {
    return cart.reduce((prev,current)=>{
        return prev + (current.quantity * current.price)
    },0)
}


export const reducer = (state, action) => {

    switch (action.type) {
        case "GET-PRODUCTS":

            return {
                ...state,
                products: action.payload.products
            }

        case "LOAD-PRODUCTS":

            return {
                ...state,
                productsLoader: action.payload
            }

        case "ADD-TO-CART":


            var exists = false
            const payload = action.payload;
            state.cart.forEach(cartProduct => {
                if (cartProduct.id == action.payload.id) {
                    cartProduct.quantity += 1;
                    exists = true;
                }
                return cartProduct
            })
            if (exists == false) {
                action.payload.quantity = 1
                state.cart.push(action.payload)
            }

            const total = sumCartItems(state.cart)

            return {
                ...state,
                cart: state.cart,
                totalAmount: total
            }

        default:
            return state;
    }
};