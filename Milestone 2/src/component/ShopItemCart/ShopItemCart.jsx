import React, {useState} from "react";
import "./ShopItemCart.css";
import product from "../../images/unsplash_uhzMXsQ7hBA.png"
import plus from "../../images/plus.png"
import minus from "../../images/minus.png"
import cross from "../../images/cross.png"



const ShopItemCart = ({product, handleCartProductDeletion, handleAddQuantityCartProduct}) => {
  const [show, setShow] = useState(true);
  const [count,setCount] = useState(product.quantityOnCart);
  function removeElement(){
    handleCartProductDeletion(product.id)
    setShow((prev) => !prev);
  }
  function increaseCounter(){
    handleAddQuantityCartProduct(product.id, 1, product.price)
    setCount((prev) => prev+1);
    console.log("quant = " + count)
  }
  function decreaseCounter(){
    if(count === 1) {
      removeElement()
      return;
    }
    handleAddQuantityCartProduct(product.id, -1, -1 * product.price)
    setCount((prev) => prev-1);
    console.log("quant = " + count)
  }

  function importAll(r) {
		return r.keys().map(r);
	  }
	  
	const images = importAll(require.context('../../images/productsImages/', false, /\.(png|jpe?g|svg)$/));

  return (<>
    {show !== true ? (<> </>) :
    (<div className="cart-item">
      <img className="product-img" src={images[product.img]} alt="generic jeans" />

      <p>{product.title}</p>
      <button onClick={increaseCounter} className="pm-button" src={plus} alt="+" >+</button>
      <p className="quantity">{product.quantityOnCart}</p>
      <button onClick={decreaseCounter} className="pm-button" src={minus} alt="-" >-</button>
      <p>R${product.totalPrice.toFixed(2)}</p>
      <button onClick={removeElement} className="pm-button" src={cross} alt="X">X</button>
    </div>)
    }
  </>
  );
  };

export default ShopItemCart;
