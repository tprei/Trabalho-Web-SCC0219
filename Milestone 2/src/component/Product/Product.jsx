import React from "react";
import { Link, useNavigate } from "react-router-dom";
import productImage from "../../images/unsplash_uhzMXsQ7hBA.png";

import "./Product.css"

const Product = ({product}) => {
    const navigate = useNavigate()
    
    const handleProductClick = () => {
        return(
            navigate(`/productDetails/${product.id}`)
        )
    }

    return (
        <div class="product" onClick={handleProductClick} onMouseOver={() => {styles.border = "6px solid chartreuse"}}>
            <div>
                <img src={productImage} alt="" />
            </div>
            <p>{product.title}</p>
            <p class="price">R${product.price}</p>
            <a href="https://www.google.com/">
                {/*<img src="./Shopping cart.png" alt="" />*/}
                <p>Add to Cart</p>
            </a>
        </div>
    );
};

export default Product;
