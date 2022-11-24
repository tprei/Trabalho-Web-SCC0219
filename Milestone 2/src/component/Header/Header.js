import React from "react";
import "./Header.css";
import logo from "../../images/logo.png"
import cart from "../../images/cart.png"
import profileIcon from "../../images/profileicon.png"




const Header = () => {
  return (
    <div class="barra">
        <div><img class="logo" src={logo} alt=""/></div>
        <text class="title">The Clothes Store</text>
        <input class="input" />
        <div><img class="img" src={cart} alt=""/></div>
        <div><img class="img" src={profileIcon} alt=""/></div>
      </div>
  );
};

export default Header;
