import React from 'react';
import ShopItemCart from './ShopItemCart';

const ShoppingCart = ({cartProducts}) => {
    return ( 
        <>
        {cartProducts.map(product => <ShopItemCart 
            product={product}
        />)}
            
        </>
     );
}
 
export default ShoppingCart;