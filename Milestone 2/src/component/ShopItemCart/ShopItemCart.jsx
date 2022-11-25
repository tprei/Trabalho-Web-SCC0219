import React, {useState} from "react";
import "./ShopItemCart.css";
import product from "../../images/unsplash_uhzMXsQ7hBA.png"
import plus from "../../images/plus.png"
import minus from "../../images/minus.png"
import cross from "../../images/cross.png"



const ShopItemCart = () => {
  const [show, setShow] = useState(true);
  const [count,setCount] = useState(1);
  function removeElement(){
    setShow((prev) => !prev);
  }
  function increaseCounter(){
    setCount((prev) => prev+1);
  }
  function decreaseCounter(){
    if(count === 1) {
      removeElement()
      return;
    }
    setCount((prev) => prev-1);
  }
  return (<>
    {show !== true ? (<> </>) :
    (<div className="cart-item">
      <img src={product} alt="generic jeans" />

      <p>Generic Jeans</p>
      <button onClick={increaseCounter} className="pm-button" src={plus} alt="+" >+</button>
      <p className="quantity">{count}</p>
      <button onClick={decreaseCounter} className="pm-button" src={minus} alt="-" >-</button>
      <p>$99999</p>
      <button onClick={removeElement} className="pm-button" src={cross} alt="X">X</button>
    </div>)
    }
  </>
  );
  };

export default ShopItemCart;
