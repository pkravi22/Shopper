import React, { useContext } from "react";
import image from "../assets/product_31.png";
import { productContext } from "../context/productContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { MdDelete } from "react-icons/md";
const Cart = () => {
  const { products, removeItem } = useContext(productContext);
  const navigate = useNavigate();
  console.log(products);

  const handlePayment = () => {
    navigate("/payment");
  };
  console.log(products.length);
  return (
    <div className=" flex flex-col md:flex-row gap-8 px-8 font-sans min-h-screen bg-white py-8">
      <div className="w-[60%]">
        <div className="flex justify-between border-b border-slate-400">
          <div className="  mb-8">
            <h2 className="text-3xl  font-bold"> Shopping Cart</h2>
          </div>
          <div>
            <button onClick={()=>navigate("/")} className="border font-bold border-black rounded-md px-4 py-1">
              Continue Shopping
            </button>
          </div>
        </div>

        <div className=" ">
          <div className="mt-4">
            {products.length > 0 ? (
              <ul className="flex flex-col gap-2">
                {products.map((product, index) => (
                  <li
                    key={index}
                    className="flex px-2 border border-black mx-8 rounded-md py-2 "
                  >
                    <div className="w-1/6">
                      <img
                        src={product.image || image}
                        alt=""
                        className="w-[80px] rounded-md"
                      />
                    </div>
                    <div className="w-4/6 flex items-center text-xl">
                      <p> {product.name}</p>
                    </div>
                    <div className="w-1/6 flex gap-2 items-center">
                      {" "}
                      <p className="text-xl">${product.new_price}</p>
                      <div className="">
                        <button
                          onClick={() => removeItem(product.id)}
                          className="cursor-pointer"
                        >
                     <MdDelete size={30}/>

                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-3xl bg-red-300 my-4  md:mx-8 px-2 md:px-8 py-2 rounded-md w-[50%] text-center">
                Your cart is empty
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex w-[36%] flex-col border bg-green-50 px-4 h-[150px] rounded-lg">
        <div> <h1 className=" font-sans text-xl flex justify-start items-center py-4 ">
          Cart SubTotal:
          <span className="px-4 text-right font-bold text-green-800"> $
          {products.reduce(
            (acc, product) => acc + Number(product.new_price),
            0
          )}</span>
         
        </h1>
        <p className="text-sm">Shopping and delivery fees are included</p></div>
        <div><motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 10, opacity: 1 }}
        >
          <button
            className="w-52  font-bold   flex justify-center bg-green-300 rounded-lg py-2 "
            onClick={handlePayment}
          >
            Pay now
          </button>
        </motion.div></div>
       

        
      </div>
    </div>
  );
};

export default Cart;
