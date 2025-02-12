import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";  // Import useNavigate
import all_product from "../assets/all_product.js";
import cart from "../assets/cart_icon.png";
import { productContext } from "../context/productContext.jsx";

const Women = () => {
  const products = all_product;
  const { addTocart } = useContext(productContext);
  const womenProducts = products.filter((item) => item.category === "women");

  const navigate = useNavigate();  // Initialize navigate function

  return (
    <div className="w-screen py-6 px-4 flex flex-col justify-center items-center" >
      <div className="text-2xl text-center pt-2 my-4 border-b-2">Popular In Women</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center mx-auto gap-4 px-2 md:px-8">
        {womenProducts.map((product) => (
          <div key={product.id} className="p-2 border rounded-md shadow-md">
            {/* Navigate to Product Details when clicked */}
            <img 
              src={product.image} 
              alt="" 
              className="object-cover py-2 cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            />
            <h2 className="text-base">{product.name}</h2>

            <div className="flex gap-4 justify-between py-4 px-4">
              <p className="text-red-500 font-bold text-md line-through">${product.old_price}</p>
              <p className="text-green-500 font-bold text-md">${product.new_price}</p>
              <button className="p-2" onClick={() => addTocart(product)}>
                <img src={cart} alt="" className="w-[30px] cursor-pointer" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Women;
