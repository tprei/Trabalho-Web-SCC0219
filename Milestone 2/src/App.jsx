import React, { useState } from "react";
//import ShopItemCart from "./component/ShopItemCart/ShopItemCart";
import Header from "./component/Header/Header";
/*import Admin from "./component/Admin/Admin";
import RegLogForms from "./component/RegLogForms/RegLogForms";
import ShoppingPageMenu from "./component/ShoppingPageMenu/ShoppingPageMenu";
import ShopItem from "./component/ShopItem/ShopItem";
import MainItem from "./component/MainItem/MainItem";*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./component/Home/Home";
import ProductDetails from "./component/ProductDetails/ProductDetails";
import Products from "./component/Products/Products";
import MainItem from "./component/MainItem/MainItem";
import RegLogForms from "./component/RegLogForms/RegLogForms";
import { List } from "./products/list";
import ShopItemCart from "./component/ShopItemCart/ShopItemCart";
import cartImage from "./images/cart.png";

import data from "./data";

import "./App.css";

const App = () => {
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const onDelete = (product) => {
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  };

  console.log(cartItems);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home products={products.slice(0, 5)} onAdd={onAdd} />
              </>
            }
          />
          <Route
            path="/productDetails/*"
            element={
              <>
                <Header />
                <ProductDetails products={products} onAdd={onAdd} />
              </>
            }
          />
          <Route
            path="/shoppingPage"
            element={
              <>
                <Header />
                <div className="productsPage products">
                  {/* <Products products={products.slice(0, 5)} onAdd={onAdd} /> */}
                  <Products products={products} onAdd={onAdd}/>
                </div>
          
              </>
            }
          />
          <Route
            path="/register"
            element={
              <>
                <Header />
                <div className="register">
                  <RegLogForms />
                </div>
              </>
            }
          />
          <Route
            path="/shoppingCart"
            element={
              <>
                <Header />
                <div className="cartContainer">
                  {cartItems.map((item) => (
                    <ShopItemCart
                      key={item.id}
                      item={item}
                      onAdd={onAdd}
                      onRemove={onRemove}
                      onDelete={onDelete}
                    />
                  ))}
                  <button className="cartButton" onClick={() => alert("Pedido Finalizado!")}>
                      <img src={cartImage} alt="" />
                      <p>Finalizar Pedido</p>
                  </button>
                </div>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
