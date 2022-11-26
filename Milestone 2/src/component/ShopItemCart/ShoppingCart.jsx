import React from 'react';
import ShopItemCart from './ShopItemCart';

const ShoppingCart = ({cartProducts, handleCartProductDeletion, handleAddQuantityCartProduct}) => {
    return ( 
        <>
        {cartProducts.map(product => <ShopItemCart 
            product={product}
            handleCartProductDeletion={handleCartProductDeletion} 
            handleAddQuantityCartProduct={handleAddQuantityCartProduct}
        />)}
            
        </>
     );
}
 
export default ShoppingCart;