import React, { useEffect, useState } from 'react'
import img1 from "../assets/img1.jpg"
import img2 from "../assets/img2.jpg"
import img3 from "../assets/img3.jpg"
import Nav from './Nav'

const img = {
  img : "../assets/img3.jpg"
}

function Hero() {
  const image = [{src: img1,
                  h1:"Explore the World with Nyla Travels",
                  p:"We provide complete travel solutions including bookings, packages, and personalized itineraries."},
                {src: img2,
                  h1:"Explore the World with Confidence",
                  p:"Discover amazing places with comfort, safety, and confidence."},
                {src: img3,
                  h1:"Escape the Ordinary",
                  p:"Step out of the everyday and discover new adventures."}]
  const [index,setindex]= useState(0)
 
  useEffect(()=>{
    const interval = setInterval(() => {
      setindex((prev)=>(prev+1)%image.length)
    }, 8000);
    return ()=>clearInterval(interval)
  },[])
  return (
    <div>
       <div className='relative w-full h-screen '>
        
        <img src={image[index].src} alt="" className='object-cover object-top  md:w-screen md:object-center h-screen z-0 '/>
        <div className='absolute h-screen inset-0 bg-black/40'></div>
        <div className='absolute inset-0 flex flex-col justify-center items-center  text-center text-white z-10'>
          <h2 className='font-family leading-20 pb-3  text-5xl font-bold bg-linear-to-r from-amber-500 to-amber-700 text-transparent bg-clip-text' >{image[index].h1}</h2>
          <p className='w-full mt-2.5 text-xl'> {image[index].p}</p>
        </div>
        {/* {img.img} */}
        
       </div>

    </div>
  )
}

export default Hero