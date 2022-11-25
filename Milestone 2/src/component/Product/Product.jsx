import React, { useState } from "react";
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

    function importAll(r) {
		return r.keys().map(r);
	  }
	  
	const images = importAll(require.context('../../images/productsImages/', false, /\.(png|jpe?g|svg)$/));

    const [border, setBorder] = useState("");
    const styles = {
        border: border
    };

    return (
        <div 
            className="product" 
            style={styles} 
            onClick={handleProductClick} 
            onMouseEnter={() => {setBorder("1px solid #222")}} 
            onMouseLeave={() => {setBorder("")}}
            >
            <div>
                <img className="productImage" src={images[product.img]} alt="" />
            </div>
            <p>{product.title}</p>
            <p className="price">R${product.price}</p>
            
        </div>
    );
};

export default Product;
