"use client";
import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/Types';

const CustomBotton = ({title,containerStyles,handleClick, btnType,textStyles,rightIcon}:CustomButtonProps) => {
  return (
    <button
        disabled ={false}
        type={btnType || "button"}
        className={containerStyles }
        onClick={handleClick}
        >
            <span className={'flex-1 ${textStyles}'}>
                {title}
            </span>
            
             { rightIcon && (  <div className='relative w-6 h-6  '>
         <Image src={rightIcon} alt='right icon0'  fill className='object-contain'  />
              </div>
                )}

    </button>
  )
}

export default CustomBotton