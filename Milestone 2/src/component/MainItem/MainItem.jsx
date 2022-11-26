import React from "react";
import "./MainItem.css";
import productImage from "../../images/unsplash_uhzMXsQ7hBA.png";
import cartImage from "../../images/cart.png";

const MainItem = ({product}) => {
	
	function importAll(r) {
		return r.keys().map(r);
	  }
	  
	const images = importAll(require.context('../../images/productsImages/', false, /\.(png|jpe?g|svg)$/));

	return (
    <div className="products main-view">
          <div className="main-product">
            <div><img className="image-main" src={images[product.img]} alt="" /></div>
            <p>{product.title}</p>
            <p className="price">R${product.price}</p>
            <a href="https://www.google.com/">
              <img src={cartImage} alt="" />
              <p className="text-cart">Add to Cart</p>
            </a>
          </div>
          <div className="item-info">
            <p className="text item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm</p>
            <p className="text">Size:<span className="item-size"></span></p>
            <p className="text">Color:<span className="item-color"></span></p>
          </div>
      </div>
  );
};

export default MainItem;
