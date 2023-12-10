import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import CustomBotton from './CustomBotton'
const Navbar = () => {
  return (
   
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440] mx-auto
        flex justify-between items-center sm:px-16  px-6 py-6'>
   <Link  href="/" className='flex justify-center items-center' >
   <Image src={'/logo.svg'} alt='logo' width={118} height={18} className='object-contain'/> 
   
   </Link>
   <CustomBotton 
   title='Sign in'
   btnType='button'
  containerStyles='text-primary-blue rounded-full bg-white min-w-[130px]'
  />
        </nav>
    </header>
  )
}

export default Navbar