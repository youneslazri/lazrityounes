"use client"
import React from 'react'
import { useState } from 'react'
import Image from 'next/image'

import { CarProps } from '@/Types'
import CustomBotton from './CustomBotton'
import { calculateCarRent, generateCarImageUrl } from '@/utils'
import CarDetails from './CarDetails'
interface CarCardProps{
     car:CarProps
}
const CarCard = ({car}:CarCardProps) => {
  const{  city_mpg, year,make, model,transmission,drive }=car;
const [isOpen ,setIsOpen] = useState(false);
  const carRent = calculateCarRent(city_mpg,year)
  return (
    <div className='car-card group'>
      <div className='car-card__content'>
        <h1 className='car-card__content-title'>
          {make} {model}
        </h1>
      </div>
      <p className='flex mt-6 text-[32px] font-extrabold'>
        <span className='self-start text-[14px] font-bold'>
        $ 
        </span>
        {carRent}
        <span className='self-end text-[14px] font-semibold '>
         /day
        </span>
      </p>
      <div className='relative w-full h-40 my-3 object-contain'>
              <Image src={generateCarImageUrl(car)} alt='images' fill priority className='object-contain'/>
      </div>

      <div className='relative flex w-full mt-2'>
        <div className='flex group-hover:invisible
         w-full justify-between text-gray'>


          <div className='flex flex-col justify-center items-center gap-2'>
  <Image src="/steering-wheel.svg" width={20} height={20} alt='mmm' />

  <p className='text-[14px]'>{transmission==='a'? 'auttomatic':'Manual'}</p>
          </div>


          <div className='flex flex-col justify-center items-center gap-2'>
  <Image src="/tire.svg" width={20} height={20} alt='mmm' />

  <p className='text-[14px]'>{drive.toUpperCase()}</p>
          </div>


          <div className='flex flex-col justify-center items-center gap-2'>
  <Image src="/gas.svg" width={20} height={20} alt='mmm' />

  <p className='text-[14px]'>{city_mpg} MPG</p>
          
        </div>
      </div>

      <div className='car-card__btn-container'>
        <CustomBotton
        title="SEE More"
        containerStyles='w-full py-[10px] rounded-2xl bg-blue-500'
        textStyles="text-blue-100 font-extrabold"
        rightIcon ="/right-arrow.svg"
        handleClick ={() => setIsOpen(true)}
        />
      </div>
      </div>
      <CarDetails isOpen={isOpen} closeModal={() =>
      setIsOpen(false)} car={car} />
    </div>
  )
}

export default CarCard