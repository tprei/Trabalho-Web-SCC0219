import React from "react";
import "./MainItem.css";
import product from "../../images/unsplash_uhzMXsQ7hBA.png"



const ShoppingPageMenu = () => {
  return (
    <div className="products main-view">
        <div className="product main-product">
            <div><img className="image-main" src={product} alt="" /></div>
            <p>Generic Blue Jeans</p>
            <p className="price">$99999.99</p>
            <a href="https://www.google.com/">
              <img src="./Shopping cart.png" alt="" />
              <p>Add to Cart</p>
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

export default ShoppingPageMenu;
