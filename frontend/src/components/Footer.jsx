import React from 'react'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className='h-80 bg-primary flex items-center p-20  justify-evenly'>
      <img src="https://www.gla.ac.in/images/gla-university-logo.png" alt="" />
      <div className='text-white flex flex-col gap-2 '>
        <h4 className='font-bold text-xl'>Quick Links</h4>
        <NavLink to='' className={({isActive})=>`${isActive?'text-black':'text-white'} hover:underline`}>About Us</NavLink>
        <NavLink to='/contact' className={({isActive})=>`${isActive?'text-black':'text-white'} hover:underline`}>Contact Us</NavLink>
        <NavLink to='events' className={({isActive})=>`${isActive?'text-black':'text-white'} hover:underline`}>Events</NavLink>
        <NavLink to='connect' className={({isActive})=>`${isActive?'text-black':'text-white'} hover:underline`}>Connect To Allumini</NavLink>
        <NavLink to='gallery' className={({isActive})=>`${isActive?'text-black':'text-white'} hover:underline`}>Gallery</NavLink>
        <NavLink to='donations' className={({isActive})=>`${isActive?'text-black':'text-white'} hover:underline`}>Donations</NavLink>
      </div>
      <div className='text-white'>
        <p className='text-xl font-bold'>Stay Connected</p>
        <div className='flex gap-2'>

        </div>
      </div>
    </div>
  )
}

export default Footer