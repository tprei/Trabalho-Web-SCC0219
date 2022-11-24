import React from "react";
import ShopItemCart from "./component/ShopItemCart/ShopItemCart";
import Header from "./component/Header/Header";
import Admin from "./component/Admin/Admin";
import RegLogForms from "./component/RegLogForms/RegLogForms";
import ShoppingPageMenu from "./component/ShoppingPageMenu/ShoppingPageMenu";
import ShopItem from "./component/ShopItem/ShopItem"
import MainItem from "./component/MainItem/MainItem"

const App = ()=>{
  const message = "hello World";
  return (
    <div>
      <Header/>
      {/* <Admin/>
      <ShopItem/>
      <ShopItem/>
      <ShopItem/>
      <ShopItem/>  */}
      <ShoppingPageMenu/>
      <ShopItem/>
      <RegLogForms/>
      <MainItem/>
    </div>
  );
};

export default App;

