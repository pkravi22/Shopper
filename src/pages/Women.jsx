import React from 'react'
import hero from "../assets/banner_women.png";
import WomenProduct from "../component/WomenProduct";
import { motion } from "framer-motion";
const Women = () => {
  return (
    <>
    <motion.div 
    initial={{ opacity: 0, x: 50 }} 
    animate={{ opacity: 1, x: 0 }} 
    transition={{ duration: 1 }}
    >
      <img src={hero} alt="" />
      </motion.div>
    <WomenProduct/>
    </>
  )
}

export default Women