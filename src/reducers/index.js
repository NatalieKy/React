import {ON_ITEM_IN_CART_TOGGLE, ON_PRODUCTS_LOADED} from "../action-types";

let initialState = {
    productList: [],
    cart: [],
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ON_PRODUCTS_LOADED:
            return {...state, productList: action.payload}
        case ON_ITEM_IN_CART_TOGGLE:
            const newCart = state.cart.filter(el => el.id !== action.payload.id)
            if (newCart.length === state.cart.length){
                newCart.push(action.payload)
            }
            return {...state, cart: newCart}

        default:
            return state
    }
}