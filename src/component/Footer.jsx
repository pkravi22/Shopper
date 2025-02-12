import React from 'react'
import logo from "../assets/logo_big.png"
import { Link } from 'react-router-dom'
import Signup from '../pages/Signup'
const Footer = () => {
  return (
  <div className='flex gap-4 relative  flex-col md:flex-row bg-slate-800  justify-center md:justify-between py-8 px-8 '>
    <div className='w-full absolute bottom-0 -z-5 left-0'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#34aba9" fill-opacity="1" d="M0,64L26.7,53.3C53.3,43,107,21,160,42.7C213.3,64,267,128,320,149.3C373.3,171,427,149,480,154.7C533.3,160,587,192,640,208C693.3,224,747,224,800,202.7C853.3,181,907,139,960,128C1013.3,117,1067,139,1120,170.7C1173.3,203,1227,245,1280,261.3C1333.3,277,1387,267,1413,261.3L1440,256L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path>
</svg></div>
   
    <div className='flex w-1/3 z-10  flex-col mx-auto justify-center items-center'>
      <img src={logo} alt="" className='w-[50%] -mb-2' />
      <span className='text-2xl tracking-[4px] md:tracking-[6px] text-white'>Shopper</span>
    </div>

    <div className=' w-1/3 z-10 my-auto justify-center m mx-auto'>
      <ul className='flex flex-col justify-center items-center text-lg text-white'>
        <Link to="/men" className='underline'>Men</Link>
        <Link to="/women" className='underline'>Women</Link>
        <Link to="/kids" className='underline'>Kids</Link>
       
        <Link to="/signup" className='underline'>SIgnup</Link>
       
        <Link to="/login" className='underline'>Login</Link>
       
        
      </ul>
    </div>
    <div className='flex z-10  justify-center items-center p-4 '>
        <input type="email" placeholder='enter your email' className='px-4 py-2 bg-gray-200 outline-none'/>
        <button className='bg-black px-4 h-[40px] py-2 text-white'>Subscribe</button>
      </div>
  </div>
  )
}

export default Footer