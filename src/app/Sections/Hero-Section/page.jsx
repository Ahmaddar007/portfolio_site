import { Box, Shirt } from 'lucide-react'
import React from 'react'
import 'animate.css';


const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-10 px-[5%] py-20 bg-white">
    <div className="flex flex-col justify-center space-y-6">
      <h2 className="text-gradient text-4xl font-bold leading-tight bg-gradient-to-r from-blue-600 via-blue-900 to-blue-900 text-transparent bg-clip-text">
        Doraemon Collection
      </h2>
      <p className="text-gray-700 font-semibold text-lg leading-relaxed">
        Explore our exclusive Doraemon Collection, featuring iconic designs and timeless pieces inspired by the beloved character. Celebrate the charm and nostalgia.
      </p>
    </div>
    <div className="flex relative justify-center items-center">
      <Shirt className='absolute left-1/3 bottom-36 z-50 animate__fadeInUp animate__animated animate__faster text-blue-500 h-auto w-1/3' />
      <Box className='animate__fadeInBottomRight animate__animated h-auto w-16 absolute left-20 top-10' />
      <Box className='animate__fadeInBottomLeft animate__animated h-auto w-16 absolute right-20 top-10' />
      <img className='w-4/6 relative top-32 animate__fadeIn animate__animated' src="https://utfs.io/f/vm2okaME29juiT8270oP2y4xW3U9Qus1HzcjeaV8D7KTdJkG" />
    </div>
  </div>
  
  )
}

export default Hero