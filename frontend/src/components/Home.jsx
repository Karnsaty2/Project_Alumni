import React from 'react'
import { Link } from 'react-router-dom'
import EventCard from './EventCard'

function Home() {
  return (
    <>
    <div className='bg-[url("landing-page-img.jpg")] h-screen bg-cover bg-top mt-16 '>
      <div className='h-screen bg-black/40 '></div>
      <div className='absolute top-44 left-44 w-[600px]'>
        <h2 className='text-7xl font-bold text-white '>Connect & Grow</h2>
        <p className='text-lg text-white w-[500px] my-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis nostrum recusandae iusto ad? Rerum magni voluptatibus sequi error, culpa nesciunt consequatur eum beatae repellendus impedit, eligendi aspernatur cumque illum facere enim qui iste in molestias dolor libero eveniet. Sit, doloremque.</p>
        <Link className='bg-white py-2 px-8 rounded-md border-2 border-transparent text-primary font-semibold  hover:border-white hover:bg-transparent hover:text-white transition duration-500'>Explore</Link>
      </div>
    </div>
    <div className='h-screen bg-[#dbeafe] flex flex-col items-center justify-evenly'>
      <div className='flex justify-between px-40 w-full items-center'>
        <h3 className='text-primary text-4xl font-bold'>Upcoming Alumini Events</h3>
        <Link className=' text-primary underline text-2xl font-bold'>See All Events</Link>
      </div>
      <EventCard/>
    </div>
      <div className='h-screen px-10 flex items-center justify-evenly flex-col'>
        <h3 className='text-3xl text-primary  font-bold'>Our Gallery</h3>
        <div className='flex gap-3'>
          <img className='object-cover h-[450px] w-[300px] rounded-xl' src="https://media.istockphoto.com/id/1456220037/photo/graduation-at-the-university.jpg?s=612x612&w=0&k=20&c=IDTDT8iwuV1-Z9ZWfkKh5Ke2q5gHAcTQZbhmMWzR3Ac=" alt="" />
          <div className='flex flex-col gap-3'>
            <img className='object-cover h-[255px] w-[260px] rounded-xl' src="https://media.istockphoto.com/id/1456220037/photo/graduation-at-the-university.jpg?s=612x612&w=0&k=20&c=IDTDT8iwuV1-Z9ZWfkKh5Ke2q5gHAcTQZbhmMWzR3Ac=" alt="" />
            <img className='object-cover h-[180px] w-[260px] rounded-xl' src="https://media.istockphoto.com/id/1456220037/photo/graduation-at-the-university.jpg?s=612x612&w=0&k=20&c=IDTDT8iwuV1-Z9ZWfkKh5Ke2q5gHAcTQZbhmMWzR3Ac=" alt="" />
          </div>
          <div className='flex flex-col gap-3'>
            <img className='object-cover h-[180px] w-[260px] rounded-xl' src="https://media.istockphoto.com/id/1456220037/photo/graduation-at-the-university.jpg?s=612x612&w=0&k=20&c=IDTDT8iwuV1-Z9ZWfkKh5Ke2q5gHAcTQZbhmMWzR3Ac=" alt="" />
            <img className='object-cover h-[255px] w-[260px] rounded-xl' src="https://media.istockphoto.com/id/1456220037/photo/graduation-at-the-university.jpg?s=612x612&w=0&k=20&c=IDTDT8iwuV1-Z9ZWfkKh5Ke2q5gHAcTQZbhmMWzR3Ac=" alt="" />
          </div>
          <img className='object-cover h-[450px] w-[300px] rounded-xl' src="https://media.istockphoto.com/id/1456220037/photo/graduation-at-the-university.jpg?s=612x612&w=0&k=20&c=IDTDT8iwuV1-Z9ZWfkKh5Ke2q5gHAcTQZbhmMWzR3Ac=" alt="" />
        </div>
        <div className='flex gap-4'>
          <Link className='py-2 px-5 rounded-md font-semibold border-2 bg-primary border-transparent  text-white hover:bg-transparent hover:border-primary hover:text-primary transition duration-500'>View Full Gallery</Link>
          <Link className=' py-2 px-5 rounded-md border-2 border-primary text-primary font-semibold hover:border-transparent hover:bg-primary hover:text-white transition duration-500'>Upload A Memory</Link>
        </div>
      </div>
    </>
  )
}

export default Home