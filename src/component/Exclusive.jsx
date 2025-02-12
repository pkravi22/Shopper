import React from "react";
import exlusive from "../assets/exclusive_image.png";
import { motion } from "framer-motion";
const Exclusive = () => {
  return (
    <>
      
        <motion.div 
    initial={{ opacity: 0, x: 50 }} 
    animate={{ opacity: 1, x: 0 }} 
    transition={{ duration: 1 }}
    ><div className="flex bg-gradient-to-t  from-cyan-200 to-blue-300 flex-col-reverse gap-8 sm:flex-row justify-center items-center ">
        <div className="w-full flex flex-col gap-4  md::w-1/2 p-4 px-4 md:px-32">
        <p className="text-xl">only on best seller product</p>
          <button className="bg-red-600 w-[200px] text-white px-4 rounded-xl py-1 ">
            Check now
          </button>
        </div>

        <div className="w-full flex justify-center md:w-1/2">
          <img src={exlusive} alt="" className="w-[300px] " />
        </div>
      </div></motion.div>
          
          
    </>
  );
};

export default Exclusive;
