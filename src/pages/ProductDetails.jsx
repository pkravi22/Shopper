import React, { useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { productContext } from "../context/productContext.jsx";
import all_product from "../assets/all_product.js";

const ProductDetails = () => {
  const { id } = useParams();
const {addTocart} = useContext(productContext);
  const product = all_product.find((item) => item.id === parseInt(id));

  const [mainImage, setMainImage] = useState(product?.image || "");

  if (!product) {
    return <h2 className="text-center text-red-500">Product not found!</h2>;
  }

  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section: Image Gallery */}
        <div className="flex flex-row-reverse items-center">
          <img
            src={mainImage}
            alt={product.name}
            className="w-[400px] h-[400px] object-cover rounded-lg shadow-lg border"
          />
          <div className="flex gap-2 mt-4">
            {[product.image, ...(product.images || [])].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Product"
                className="w-20 h-20 object-cover cursor-pointer border rounded-md hover:scale-105 transition"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>

        {/* Right Section: Product Details */}
        <div className="flex flex-col justify-between">
          <h1 className="text-3xl font-bold">{product.name}</h1>
          <p className="text-gray-600 my-2">{product.description || "No description available for this product right now"}</p>
          <div className=" flex flex-col gap-2 mt-6  pt-4">
            <h2 className="text-2xl font-semibold mb-2">Customer Reviews</h2>
            <p className="text-gray-500 italic">⭐⭐⭐⭐⭐ (4.8/5) <br />- Based on 120 reviews</p>
          </div>
         
          <div className="flex items-center gap-4 my-4">
            <p className="text-red-500 font-bold text-lg line-through">${product.old_price}</p>
            <p className="text-green-500 font-bold text-xl">${product.new_price}</p>
          </div>

          {/* Add to Cart Section */}
          <div className="flex items-center gap-4">
            <input
              type="number"
              min="1"
              defaultValue="1"
              className="w-16 text-center border border-gray-300 rounded-md py-2"
            />
            <button
              className="bg-blue-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-700 transition"
              onClick={() => addTocart(product)}
            >
              Add to Cart
            </button>
          </div>

          {/* Product Reviews */}
          
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
