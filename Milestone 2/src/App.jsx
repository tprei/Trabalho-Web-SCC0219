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

const App = () => {
    const message = "hello World";

    const [products, setProducts] = useState([
        {
            id: "1",
            title: "Calca Jeans",
            price: 68.99,
            img: "../../images/unsplash_uhzMXsQ7hBA.png",
        },
        {
            id: "2",
            title: "Calca Jeans",
            price: 68.99,
            img: "../../images/unsplash_uhzMXsQ7hBA.png",
        },
        {
            id: "3",
            title: "Calca Jeans",
            price: 68.99,
            img: "../../images/unsplash_uhzMXsQ7hBA.png",
        },
        {
            id: "4",
            title: "Calca Jeans",
            price: 68.99,
            img: "../../images/unsplash_uhzMXsQ7hBA.png",
        },
        {
            id: "5",
            title: "Calca Jeans",
            price: 68.99,
            img: "../../images/unsplash_uhzMXsQ7hBA.png",
        },
    ]);

    return (
        <div>
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<Home products={products} />} />
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
