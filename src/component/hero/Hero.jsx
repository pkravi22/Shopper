import React from "react";
import { useNavigate } from "react-router-dom";
import hero from "../../assets/hero_image.png";
import hand from "../../assets/hand_icon.png";
import { motion } from "framer-motion";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="max-h-[1080px] bg-gradient-to-t from-cyan-200 to-blue-300 flex flex-col sm:flex-row justify-center items-center"
    >
      {/* Left Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="flex w-full sm:w-1/2 flex-col text-4xl py-4 sm:py-32 space-y-4 sm:pl-16"
      >
        <h1 className="uppercase text-4xl font-semibold">New Arrivals Only</h1>
        <div className="flex text-6xl font-bold items-center">
          <p>New</p>
          <img src={hand} alt="hand icon" className="w-[50px] ml-2" />
        </div>
        <p className="text-6xl font-bold">Collection</p>
        <p className="text-6xl font-bold">For Everyone</p>

        {/* Category Selection Buttons */}
        <div className="mt-12 flex gap-4">
          <button
            onClick={() => navigate("/men")}
            className="bg-orange-400 text-white px-6 py-1 text-xl rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Men
          </button>
          <button
            onClick={() => navigate("/women")}
            className="bg-pink-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-700 transition"
          >
            Women
          </button>
          <button
            onClick={() => navigate("/kids")}
            className="bg-green-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-green-700 transition"
          >
            Kids
          </button>
        </div>
      </motion.div>

      {/* Right Section - Hero Image */}
      <div className="w-full flex justify-end sm:w-1/2">
        <img src={hero} alt="Hero" className="w-[400px]" />
      </div>
    </motion.div>
  );
};

export default Hero;
