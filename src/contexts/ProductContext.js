import React, { createContext } from "react";

const product = {};

const addItem = () => {};

export const ProductContext = createContext();

export default function ProductProvider(props) {
  return (
    <ProductContext.Provider value={{ product, addItem }}>{props.children}</ProductContext.Provider>
  );
}
