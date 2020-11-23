import React from "react";
import {useSelector} from "react-redux";

function Header({cart= []}) {
    cart = useSelector((state) => state.cart)
    return(
        <div>
            <button>Cart: {cart.length}</button>
        </div>
    )
}

export default Header