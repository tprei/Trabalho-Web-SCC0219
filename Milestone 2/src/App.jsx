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
import { v4 as uuidv4 } from "uuid";
import ShoppingPage from "./component/ShoppingPage/ShoppingPage";
import Products from "./component/Products/Products";
import MainItem from "./component/MainItem/MainItem"

import "./App.css"

const App = () => {

    const [products, setProducts] = useState([
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 0,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 1,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 2,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 3,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 4,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 5,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 6,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 7,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 8,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 9,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 10,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 11,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 12,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 13,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 14,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 0,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 1,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 2,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 3,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 4,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 5,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 6,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 7,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 8,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 9,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 10,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 11,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 12,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 13,
        },
        {
            id: uuidv4(),
            title: "Calca Jeans",
            price: 68.99,
            img: 14,
        },
    ]);

    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Header />
                            <Home products={products.slice(0, 5)} />
                        </>} />
                    <Route path="/productDetails/*" element={
                        <>
                            <Header /><ProductDetails products={products} />
                        </>
                    } />
                    <Route path="/shoppingPage" element={  
                        <>
                            <Header />
                            <div className="productsPage products">
                                <Products products={products} />
                            </div> 
                        </>} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;

/* <Admin/>
<ShopItem/>
<ShopItem/>
<ShopItem/>
<ShopItem/>  
<ShoppingPageMenu />
<ShopItem />
<RegLogForms />
<MainItem />*/
