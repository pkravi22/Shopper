import React, { useContext } from "react";
import all_product from "../assets/all_product.js";
import cart from "../assets/cart_icon.png" // Ensure the correct path to the cart image
import { productContext } from "../context/productContext"
const MenProduct = () => {
  // Assuming all_product is an array of product objects
  const products = all_product;

  // Filter products to get only those in the "women" category
  const menProducts = products.filter((item) => item.category === "men");
  const {addTocart} = useContext(productContext);
  
  //console.log(menProducts);

  return (
    <>
      <div className=" w-screen py-8 px-4 flex flex-col justify-center items-center">
        <div className="text-2xl text-center pt-8 my-8 border-b-2">
          Populer In Men
        </div>

        <div className="grid    grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center mx-auto gap-4 px-2 md:px-8  ">
          {menProducts.map((product, index) => (
            <div key={index} className=" p-2 border rounded-md shadow-md">
              <img src={product.image} alt="" className="object-cover py-2" />
              <h2 className="text-base">{product.name}</h2>

              <div className="flex gap-4 justify-between py-4 px-4">
                <p className="text-red-500 font-bold text-md line-through">
                  ${product.old_price}
                </p>
                <p className="text-green-500 font-bold text-md">
                  ${product.new_price}
                </p>
               <button className="p-2" onClick={()=>addTocart(product)}>
                                 <img src={cart} alt="Add to cart" className="w-[30px] cursor-pointer" />
                               </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenProduct;
