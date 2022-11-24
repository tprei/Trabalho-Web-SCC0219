import React from "react";
import "./ShopItem.css";
import product from "../../images/unsplash_uhzMXsQ7hBA.png"



const ShoppingPageMenu = () => {
  return (
    <div class="products">
    <div class="product">
          <div><img src={product} alt="" /></div>
          <p>Generic Blue Jeans</p>
          <p class="price">$99999.99</p>
          <a href="https://www.google.com/">
            <img src="./Shopping cart.png" alt="" />
            <p>Add to Cart</p>
          </a>
        </div>
        </div>
  );
};

export default ShoppingPageMenu;
