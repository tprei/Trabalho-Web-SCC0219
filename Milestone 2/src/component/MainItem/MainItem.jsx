import React from "react";
import "./MainItem.css";
import cartImage from "../../images/Shopping cart.png";
import { useNavigate } from "react-router-dom";

const MainItem = ({product, handleCartProductAdition}) => {
	const navigate = useNavigate();

	const handleBuyClick = () => {
		handleCartProductAdition(product);
		return(
			navigate("/shoppingCart")
		)
	}

	function importAll(r) {
		return r.keys().map(r);
	  }
	  
	const images = importAll(require.context('../../images/productsImages/', false, /\.(png|jpe?g|svg)$/));

	return (
    <div className="products main-view">
          <div className="main-product">
            <div><img className="image-main" src={images[product.img]} alt="" /></div>
          </div>
          <div className="item-info">
            <p>{product.title}</p>
            <p className="text item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comm</p>
            <p className="text">Size:<span className="item-size">jhjh</span></p>
            <p className="text">Color:<span className="item-color">kjghjkhgjk</span></p>
            <p className="price">R${product.price}</p>
			<button className="buy" onClick={() => {handleBuyClick()}}>
              <img src={cartImage} alt="" />
              <p>Buy</p>
			</button>
          </div>
      </div>
  );
};

export default MainItem;
