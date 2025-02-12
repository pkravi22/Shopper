import React from "react";
import hero from "../assets/banner_mens.png";
import MenProduct from "../component/MenProduct";
import { motion } from "framer-motion";


const Men = () => {
  return (
    <div>
      <motion.div 
    initial={{ opacity: 0, x: 50 }} 
    animate={{ opacity: 1, x: 0 }} 
    transition={{ duration: 1 }}
    >
      <img src={hero} alt="" />
      </motion.div>
   <MenProduct/>
    </div>
  );
};

export default Men;
