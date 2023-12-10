"use client";
import React from 'react'
import Image from 'next/image';
import CustomBotton from './CustomBotton'

const Hero = () => {
  const handleScroll =() =>{}
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'>
        <h1 className='hero__title'>
show cars,
find it easily!
        </h1>
        <p>
          Streamline your car rental experience with our effortless booking process.
        </p>
        <CustomBotton
        title ="explore cars" 
        containerStyles ="custom-btn bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleScroll}
        />
      </div>
              <div className='hero__image-container'> 
                <div className='hero__image'>
               <Image src="/hero.png" alt="Hero Image" 
               fill className='object-contain'/>
               </div>
               <div className='hero__image-overlay'>

               
               </div>
               </div>
      
     
    </div>
  )
}

export default Hero