import { lazy, Suspense, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './component/header/Navbar';
import Footer from './component/Footer';
import Cart from './pages/Cart';
import Payment from './pages/Payment';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Men = lazy(() => import('./pages/Men'));
const Women = lazy(() => import('./pages/Women'));
const Kids = lazy(() => import('./pages/Kids'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));  // Add product details page

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Suspense fallback={<div className="flex justify-center items-center h-screen text-xl">Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          <Route path="/kids" element={<Kids />} />
          
          {/* Dynamic Product Route */}
          <Route path="/product/:id" element={<ProductDetails />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Suspense>
      
      <Footer />
    </BrowserRouter>
  );
}

export default App;
