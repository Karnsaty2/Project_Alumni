import React from 'react'
import Timer from './Timer'

import { HiUserAdd,HiBell  } from "react-icons/hi";
function EventCard() {
  return (
    <>
    <div className='w-[70vw] h-[450px] rounded-3xl overflow-hidden flex mx-auto'>
        <img className='w-[50%] object-cover' src="https://media.istockphoto.com/id/474306176/photo/yale-university-graduation-ceremonies.jpg?s=612x612&w=0&k=20&c=W9yb72ka-iApvw-TO7QAmdPfS58KjLpyLFJwf_7Dr4o=" alt="" />
        <div className='bg-white w-[50%] p-10 flex flex-col gap-8 '>
          <h3 className='text-black font-bold text-3xl '>GLAMS 30th Alumini Event</h3>
          <div className='flex gap-5'>
            <p className='px-5 py-2 text-indigo-700 font-bold rounded-lg bg-[#bfdbfe]'>16th, August 2024</p>
            <p className='px-5 py-2 bg-primary font-bold rounded-lg text-white'>10 AM</p>
          </div>
          <Timer/>
          <div className='flex gap-4'>
          <button className='py-2 px-5 rounded-md font-semibold border-2 bg-primary border-transparent  text-white hover:bg-transparent hover:border-primary hover:text-primary transition duration-500 flex items-center gap-2'><HiUserAdd className='text-xl' /> Register</button>
          <button className=' py-2 px-5 rounded-md border-2 border-primary text-primary font-semibold hover:border-transparent hover:bg-primary hover:text-white transition duration-500 flex items-center gap-2'>Set Reminder <HiBell  className='text-xl'/></button>
          </div>
        </div>
      </div>
    </>
  )
}

export default EventCard