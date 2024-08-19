import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { HiUserAdd,HiOutlineArrowNarrowRight  } from "react-icons/hi";
function Header() {
  return (
    <div className='h-20 bg-primary flex items-center px-5 justify-between fixed top-0 w-full shadow-lg z-10'>
      <p className='font-bold text-3xl text-white font-[cursive]'>Interact</p> 
      <div className='flex items-center gap-4'>
        <NavLink to='/' className={({isActive})=>`${isActive?'text-black':'text-white'} hover:text-black font-semibold transition duration-700 text-lg`}>Home</NavLink>
        <NavLink to='/events' className={({isActive})=>`${isActive?'text-black':'text-white'} hover:text-black font-semibold transition duration-700 text-lg`}>Events</NavLink>
        <NavLink to='/gallery' className={({isActive})=>`${isActive?'text-black':'text-white'} hover:text-black font-semibold transition duration-700 text-lg`}>Gallery</NavLink>
        <NavLink to='/about' className={({isActive})=>`${isActive?'text-black':'text-white'} hover:text-black font-semibold transition duration-700 text-lg`}>About Us</NavLink>
        <NavLink to='/connect' className={({isActive})=>`${isActive?'text-black':'text-white'} hover:text-black font-semibold transition duration-700 text-lg`}>Connect</NavLink>
        <NavLink to='/donations' className={({isActive})=>`${isActive?'text-black':'text-white'} hover:text-black font-semibold transition duration-700 text-lg`}>Donations</NavLink>
      </div>
      <div className='flex items-center gap-2'>
        <Link to='/login' className='py-2 px-4 rounded-md font-semibold border-2  text-white hover:bg-white hover:border-transparent hover:text-primary transition duration-500 flex items-center gap-2'>LOG IN <HiOutlineArrowNarrowRight className='text-xl'/></Link>
        <Link to='/signup' className='bg-white py-2 px-4 rounded-md border-2 border-transparent text-primary font-semibold hover:border-white hover:bg-transparent hover:text-white  transition duration-500 flex items-center gap-2'><HiUserAdd className='text-xl' /> SIGN UP</Link>
      </div>
    </div>
  )
}

export default Header