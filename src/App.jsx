import { lazy, Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './component/header/Navbar'
//import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './component/Footer'
import Cart from './pages/Cart'
import Payment from './pages/Payment'
const Home = lazy(() => import('./pages/Home'));
const Men = lazy(() => import('./pages/Men'));
const Women = lazy(() => import('./pages/Women'));
const Kids = lazy(() => import('./pages/Kids'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Suspense fallback={<div>Loading...</div>}>
    <Routes>
    
   <Route path='/' element={<Home/>}/>
   <Route path='/men' element={<Men/>}/>
   <Route path='/women' element={<Women/>}/>
   <Route path='/kids' element={<Kids/>}/>
   <Route path='/product' element={<h1>product</h1>}/>
   <Route path='/product/:id' element={<h1>specific product</h1>}/>
   <Route path='/cart' element={<Cart/>}/>
   <Route path='/login' element={<Login/>}/>
   <Route path='/signup' element={<Signup/>}/>
   <Route path='/payment' element={<Payment/>}/>
    </Routes>
    </Suspense>
    <Footer/>
    </BrowserRouter>
    
    
    </>
  )
}

export default App
