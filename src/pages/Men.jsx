import React from "react";
import hero from "../assets/banner_mens.png";
import MenProduct from "../component/MenProduct";



const Men = () => {
  return (
    <div>
      <img src={hero} alt="" />
   <MenProduct/>
    </div>
  );
};

export default Men;
