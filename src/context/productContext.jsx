import React, { useState, useEffect, createContext } from 'react';

export const productContext = createContext();

const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem('products');
    if (savedProducts) {
      try {
        return JSON.parse(savedProducts);
      } catch (error) {
        console.error("Error parsing saved products from localStorage:", error);
        localStorage.removeItem('products');
      }
    }
    return [{ name: "black-Tshirt", new_price: "100" }];
  });

  useEffect(() => {
    localStorage.setItem('products', JSON.stringify(products));
  }, [products]);

  const addTocart = (product) => {
    console.log(product);
    console.log("product added");
    setProducts([...products, product]);
  };
 const removeItem=(id)=>{
    console.log("removal")
    setProducts(products.filter((product) => product.id !== id));
 }
  return (
    <productContext.Provider value={{ products, addTocart,removeItem }}>
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
