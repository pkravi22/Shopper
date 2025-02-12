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
    <div className=" flex relative flex-col md:flex-row gap-8 px-8 font-sans min-h-screen bg-white py-8">
      <div className="absolute bottom-0 w-screen -z-2"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#ff5500" fill-opacity="0.1" d="M0,192L17.1,208C34.3,224,69,256,103,266.7C137.1,277,171,267,206,266.7C240,267,274,277,309,245.3C342.9,213,377,139,411,128C445.7,117,480,171,514,181.3C548.6,192,583,160,617,138.7C651.4,117,686,107,720,117.3C754.3,128,789,160,823,181.3C857.1,203,891,213,926,213.3C960,213,994,203,1029,192C1062.9,181,1097,171,1131,149.3C1165.7,128,1200,96,1234,69.3C1268.6,43,1303,21,1337,58.7C1371.4,96,1406,192,1423,240L1440,288L1440,320L1422.9,320C1405.7,320,1371,320,1337,320C1302.9,320,1269,320,1234,320C1200,320,1166,320,1131,320C1097.1,320,1063,320,1029,320C994.3,320,960,320,926,320C891.4,320,857,320,823,320C788.6,320,754,320,720,320C685.7,320,651,320,617,320C582.9,320,549,320,514,320C480,320,446,320,411,320C377.1,320,343,320,309,320C274.3,320,240,320,206,320C171.4,320,137,320,103,320C68.6,320,34,320,17,320L0,320Z"></path>
</svg></div>
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
