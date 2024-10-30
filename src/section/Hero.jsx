import React from 'react'
import { assests } from '../assets'
import Aside from '../components/Aside'

const Hero = () => {
    const {homeImg} = assests
  return (
    <div className='grid grid-cols-6 min-h-screen max-h-[100vh] max-lg:grid-cols-4'>
        {/* hero img  */}
        <div className='col-span-4 max-lg:col-span-2 max-md:hidden h-full w-full  relative'>
            <img src={homeImg} alt="hero Img" className='object-cover w-full h-full' />
            <p className='absolute bottom-[48px] left-[48px]  text-white '>Photo by <span className='underline'>Alfred Reuben</span></p>
        </div>

        {/* aside  */}
        <div className='col-span-2 max-md:col-span-4 h-full w-full '>
            <Aside/>
        </div>
    </div>
  )
}

export default Hero