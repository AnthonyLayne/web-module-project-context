import React, { useState, Provider } from "react";
import { Route } from "react-router-dom";
import data from "./data";

// Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

import ProductProvider from "./contexts/ProductContext";

function App() {
  const [products] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart(item);
  };

  return (
    <div className="App">
      <Navigation cart={cart} />

      {/* Routes */}
      <Route exact path="/">
        <Products products={products} addItem={addItem} />
      </Route>

      <Route path="/cart">
        <ShoppingCart cart={cart} />
      </Route>
    </div>
  );
}

export default App;
