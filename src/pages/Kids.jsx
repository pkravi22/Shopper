import React from 'react'
import hero from "../assets/banner_kids.png";
import KidsProduct from "../component/KidsProduct";
import { motion } from "framer-motion";
const Kids = () => {
  return (
    <>
     <motion.div 
    initial={{ opacity: 0, x: 50 }} 
    animate={{ opacity: 1, x: 0 }} 
    transition={{ duration: 1 }}
    >
      <img src={hero} alt="" />
      </motion.div>
     <KidsProduct/>
    </>
  )
}

export default Kids