import React from "react";
import Product from "../Product/Product";

const Products = ({products}) => {
    console.log(products);

    return (
        //para cada um dos products vai renderizar um componet product

        <>
        {products.map(product => <Product 
            product={product}
        />)}
            
        </>
    );
};

export default Products;
