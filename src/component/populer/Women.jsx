import React, { useContext } from "react";
import all_product from "../../assets/all_product.js";
import cart from "../../assets/cart_icon.png"
import { productContext } from "../../context/productContext.jsx";
const Women = () => {
  // Assuming all_product is an array of product objects
  const products = all_product;
const {addTocart}=useContext(productContext)
  // Filter products to get only those in the "women" category
  const womenProducts = products.filter((item) => item.category === "women");

  console.log(womenProducts);

  return (
    <>
    <div className=" w-screen py-8 px-4 flex flex-col justify-center items-center">
<div className="text-2xl text-center pt-8 my-8 border-b-2">
    Populer In women
</div>

    <div className="grid    grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center mx-auto gap-4 px-0 md:px-8  ">
      {womenProducts.slice(0,8).map((product, index) => (
        <div key={index} className=" py-2 px-auto border rounded-md shadow-md">
          <img src={product.image} alt="" className="object-cover mx-auto py-2" />
          <h2 className="text-base px-6">{product.name}</h2>

          <div className="flex gap-4 justify-between py-4 px-8">
          <p className="text-red-500 font-bold text-md line-through">${product.old_price}</p>
          <p className="text-green-500 font-bold text-md">${product.new_price}</p>
         <img src={cart} alt="" className="w-[30px]"/>
          </div>
        </div>
      ))}
    </div>
    </div>
    </>
    
  );
};

export default Women;
