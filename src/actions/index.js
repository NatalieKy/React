import {ON_ITEM_IN_CART_TOGGLE, ON_PRODUCTS_LOADED} from "../action-types";

export const onProductsLoaded = (payload) => ({type: ON_PRODUCTS_LOADED, payload})
export const onItemInCartToggle = (payload) => ({type: ON_ITEM_IN_CART_TOGGLE, payload})
