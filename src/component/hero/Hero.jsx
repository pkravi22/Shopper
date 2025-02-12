import React from "react";
import hero from "../../assets/hero_image.png";
import hand from "../../assets/hand_icon.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <motion.div 
    initial={{ opacity: 0, x: 50 }} 
    animate={{ opacity: 1, x: 0 }} 
    transition={{ duration: 1 }}
  
  className=" max-h-[1080px]  bg-gradient-to-t justify-center  from-cyan-200 to-blue-300 flex  flex-col sm:flex-row ">
      <motion.div 
    initial={{ opacity: 0, x: 50 }} 
    animate={{ opacity: 1, x: 0 }} 
    transition={{ duration: 1 }} className="flex w-full sm:w-1/2 flex-col text-4xl  py-4 sm:py-32 space-y-4 sm:pl-16">
        <div>
            <h1 className="uppercase text-4xl fonr-semibold">New Arrivals only</h1>
        </div>
        <div className="flex text-6xl font-bold ">
            <p>New </p>
            <img src={hand} alt="" className="w-[50px]" />
           
        </div>
        <p className="text-6xl font-bold">Collection </p>
        <p className="text-6xl font-bold">For everyone</p>
      </motion.div>
      <div className="w-full flex justify-end  sm:w-1/2">
        <img src={hero} alt="" className="w-[400px]" />
      </div>
    </motion.div>
  );
};

export default Hero;
