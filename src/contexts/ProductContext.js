import React, { createContext } from "react";

const product = {};

const addItem = () => {};

export const ProductContext = createContext();

export default function ProductContext(props) {
  return (
    <ProductContext.Provider product={product} addItem={addItem}>
      {props.children}
    </ProductContext.Provider>
  );
}
