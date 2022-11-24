import React from "react";
import "./MainItem.css";
import product from "../../images/unsplash_uhzMXsQ7hBA.png"



const ShoppingPageMenu = () => {
  return (
    <div class="products main-view">
        <div class="product main-product">
            <div><img class="image-main" src={product} alt="" /></div>
            <p>Generic Blue Jeans</p>
            <p class="price">$99999.99</p>
            <a href="https://www.google.com/">
              <img src="./Shopping cart.png" alt="" />
              <p>Add to Cart</p>
            </a>
          </div>
          <div class="item-info">
            <p class="text item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm</p>
            <p class="text">Size:<span class="item-size"></span></p>
            <p class="text">Color:<span class="item-color"></span></p>
          </div>
      </div>
  );
};

export default ShoppingPageMenu;
