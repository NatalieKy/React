import {useDispatch, useSelector} from "react-redux";
import {onProductsLoaded} from "../../actions";
import React, {useEffect} from "react";
import ProductItem from "../Product/ProductItem";

export const ProductList = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.productList)

    async function getProducts() {
        const result = await fetch('https://fakestoreapi.com/products');
        const response = await result.json()
        dispatch(onProductsLoaded(response))
    }
    console.log(products);


    useEffect(() => {
        getProducts();
    }, [])

    return (
        <div>
            {
                products.map(product => <ProductItem product={product}/>)
            }
        </div>
    )

}
