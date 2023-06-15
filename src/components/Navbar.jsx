import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import a from '../images/2.png'


 
const Navbar = () => {
  const [nav,setNav]=useState(false)
  const handleClick=()=>setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center bg-black text-white'>
<div className='pl-10 '><img className='h-15 w-20' src={a} alt='logo'/></div>

  <ul className=' hidden md:flex lg:text-xl'>
    <li className='px-2 cursor-pointer'> <a className='mr-10 hover:text-red-500 hover:font-bold' href='/'>Home</a></li>
    <li className='px-2 cursor-pointer'> <a className='mr-10 hover:text-red-500 hover:font-bold' href='/products'>Products</a></li>
    <li className='px-2 cursor-pointer'> <a className='mr-10 hover:text-red-500 hover:font-bold' href='/about-us'>About Us</a></li>
    <li className='px-2 cursor-pointer'> <a className='mr-10 hover:text-red-500 hover:font-bold' href='/contact-us'>Contact Us</a></li>
  </ul>

<div onClick={handleClick} className='md:hidden z-10 cursor-pointer pr-10'>
  {!nav ?<FaBars size={30}/>: <FaTimes/>}
</div>

{/*mobile menu*/}
<ul className={!nav?'hidden':'absolute top-0 left-0 w-full h-screen bg-black flex flex-col justify-center items-center'}>
    <li className='py-6 text-4xl'><a className='hover:text-red-500 hover:font-bold' href='/'>Home</a></li>
    <li className='py-6 text-4xl'><a className='hover:text-red-500 hover:font-bold' href='/products'>Products</a></li>
    <li className='py-6 text-4xl'><a className='hover:text-red-500 hover:font-bold' href='/about-us'>About Us</a></li>
    <li className='py-6 text-4xl'><a className='hover:text-red-500 hover:font-bold' href='/contact-us'>Contact Us</a></li>
  </ul>
    </div>
  
  )
}

export default Navbar