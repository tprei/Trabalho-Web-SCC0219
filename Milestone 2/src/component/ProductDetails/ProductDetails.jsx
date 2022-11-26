import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainItem from '../MainItem/MainItem';
import Product from '../Product/Product';

const ProductDetails = ({products, handleCartProductAdition}) => {
    const currentProduct = window.location.pathname.split("/").pop();

    console.log(currentProduct)
    
    return ( 
        <>
            <Routes>
            
                {products.map(product => <Route 
                    path={product.id} element={
                        <MainItem product={product} handleCartProductAdition={handleCartProductAdition} />
                    }
                />)}
            </Routes>
        </>
    );
}
 
export default ProductDetails;