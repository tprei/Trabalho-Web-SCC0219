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
import RegLogForms from "./component/RegLogForms/RegLogForms";
import ShopItemCart from "./component/ShopItemCart/ShopItemCart";
import ShoppingCart from "./component/ShopItemCart/ShoppingCart";

const App = () => {

    const [products, setProducts] = useState([
        {
            id: uuidv4(),
            title: "Calça Jeans",
            price: 88.99,
            img: 0,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Shorts",
            price: 68.99,
            img: 1,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Camiseta Brasil",
            price: 58.99,
            img: 2,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Calça Alfaiataria",
            price: 98.99,
            img: 3,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Conjunto Rosa",
            price: 127.99,
            img: 4,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Vestido Azul",
            price: 168.99,
            img: 5,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Conjunto Copa",
            price: 97.99,
            img: 6,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Jaqueta Sarja",
            price: 120.99,
            img: 7,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Blusinha Verde",
            price: 68.99,
            img: 8,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Top",
            price: 62.99,
            img: 9,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Polo Azul",
            price: 58.99,
            img: 10,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Camiseta Listras",
            price: 54.99,
            img: 11,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Camiseta Raglan",
            price: 46.99,
            img: 12,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Cropped Manga",
            price: 78.99,
            img: 13,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Cropped Verde",
            price: 53.99,
            img: 14,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Calça Jeans",
            price: 88.99,
            img: 0,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Shorts",
            price: 68.99,
            img: 1,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Camiseta Brasil",
            price: 58.99,
            img: 2,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Calça Alfaiataria",
            price: 98.99,
            img: 3,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Conjunto Rosa",
            price: 127.99,
            img: 4,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Vestido Azul",
            price: 168.99,
            img: 5,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Conjunto Copa",
            price: 97.99,
            img: 6,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Jaqueta Sarja",
            price: 120.99,
            img: 7,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Blusinha Verde",
            price: 68.99,
            img: 8,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Top",
            price: 62.99,
            img: 9,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Polo Azul",
            price: 58.99,
            img: 10,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Camiseta Listras",
            price: 54.99,
            img: 11,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Camiseta Raglan",
            price: 46.99,
            img: 12,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Cropped Manga",
            price: 78.99,
            img: 13,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
        {
            id: uuidv4(),
            title: "Cropped Verde",
            price: 53.99,
            img: 14,
            description: "ldsakljmklfaslkdkjdaskljjkdsa",
            quantityStock: 124,
            quantitySold: 34,
        },
    ]);

    const [cartProducts, setCartProducts] = useState([{}]);

    const handleCartProductAdition = (product) => {
        /*if(!cartProducts.includes(product)){
        }*/
        const newCart = [
            ...cartProducts,
            {
                id: product.id,
                title: product.title,
                price: product.price,
                img: product.img,
                description: product.description,
                quantityStock: product.quantityStock,
                quantitySold: product.quantitySold,
            }, 
        ];
        console.log(cartProducts)
        setCartProducts(newCart);

        console.log(cartProducts)
    };

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
                            <Header /><ProductDetails products={products} handleCartProductAdition={handleCartProductAdition}/>
                        </>
                    } />
                    <Route path="/shoppingPage" element={  
                        <>
                            <Header />
                            <div className="productsPage products">
                                <Products products={products} />
                            </div> 
                        </>} />
                    <Route path="/register" element={ 
                    <>
                        <Header/>
                        <RegLogForms/> 
                    </>} />
                    <Route path="/shoppingCart" element={ 
                    <>
                        <Header/>
                        <ShoppingCart cartProducts={cartProducts} />
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
