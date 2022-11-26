import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import logo from "../../images/logo.png"
import cart from "../../images/cart.png"
import profileIcon from "../../images/profileicon.png"


const Header = () => {
  const navigate = useNavigate()
  
    
  const handleLogoClick = () => {
    return(
        navigate(`/`)
    )
  }
  const handleSearchClick = () => {
    return(
        navigate(`/shoppingCart`)
    )
  }
  const handleProfileClick = () => {
    return(
        navigate(`/register`)
    )
  }

return (
  <div className="barra">
      <p onClick={handleLogoClick}><img className="logo" src={logo} alt=""/></p>
      <text className="title">The Clothes Store</text>
      <input className="input" />
      <p onClick={handleSearchClick} ><img className="img" src={cart} alt=""/></p>
      <p onClick={handleProfileClick}  type="submit"><img className="img" src={profileIcon} alt=""/></p>
    </div>
);

};

export default Header;
