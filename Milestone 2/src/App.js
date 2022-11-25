import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ShopItemCart from "./component/ShopItemCart/ShopItemCart";
import Header from "./component/Header/Header";
import Admin from "./component/Admin/Admin";
import RegLogForms from "./component/RegLogForms/RegLogForms";
import ShoppingPageMenu from "./component/ShoppingPageMenu/ShoppingPageMenu";
import ShopItem from "./component/ShopItem/ShopItem";
import MainItem from "./component/MainItem/MainItem";
import Home from "./component/Home/Home";
import Product from "./component/Product/Product";
import Products from "./component/Products/Products";
import ShoppingPage from "./paginas/ShoppingPage/ShoppingPage";

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
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home products={products} />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

// const App = ()=>{
//   const message = "hello World";
//   return (
//     <div>
//       <Router>
//         <Routes>
//             <Route path="/" element={<MainItem /*games={games}*/ />}/>
//             <Route path="/login" element={<ShopItem /*setUser={setUser} *//>} />
//             <Route path="*" element={<div> Erro, Página Desconhecida</div>} />
//         </Routes>
//       </Router>
//       {/* <Header/>
//       <Admin/>
//       <ShopItem/>
//       <ShopItem/>
//       <ShopItem/>
//       <ShopItem/>
//       <ShoppingPageMenu/>
//       <ShopItem/>
//       <RegLogForms/>
//       <MainItem/> */}
//       {/* <Admin/>
//       <ShopItemCart/>
//       <Product/> */}
//       <RegLogForms/>
//     </div>
//   );
// };

// export default App;
