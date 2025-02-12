import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolder: "",
  });
const navigate=useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Payment Details Submitted", formData);
    alert("payemnt successfull")
    navigate("/")

  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center min-h-screen bg-gray-100"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Payment Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.cardNumber}
            onChange={handleChange}
            required
          />
          <div className="flex space-x-4">
            <input
              type="text"
              name="expiryDate"
              placeholder="MM/YY"
              className="w-1/2 p-2 border border-gray-300 rounded"
              value={formData.expiryDate}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="cvv"
              placeholder="CVV"
              className="w-1/2 p-2 border border-gray-300 rounded"
              value={formData.cvv}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            name="cardHolder"
            placeholder="Cardholder Name"
            className="w-full p-2 border border-gray-300 rounded"
            value={formData.cardHolder}
            onChange={handleChange}
            required
          />
          <motion.button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Pay Now
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default Payment;
