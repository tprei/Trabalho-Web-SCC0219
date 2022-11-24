import React from "react";
import "./ShopItemCart.css";
import product from "../../images/unsplash_uhzMXsQ7hBA.png"
import plus from "../../images/plus.png"
import minus from "../../images/minus.png"
import cross from "../../images/cross.png"



const ShopItemCart = () => {
  return (
    <div className="cart-item">
      <img src={product} alt="generic jeans" />

      <p>Generic Jeans</p>
      <img className="pm-button" src={plus} alt="+" />{" "}
      <p className="quantity">1</p>{" "}
      <img className="pm-button" src={minus} alt="-" />
      <p>$99999</p>
      <img className="pm-button" src={cross} alt="X" />
    </div>
  );
};

export default ShopItemCart;
