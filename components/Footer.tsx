import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { footerLinks } from '@/constants'

const Footer = () => {
  return (
   <footer className='flex flex-col text-black mt-5 border-t border-gray-700'>
   
    <div className='flex max-md:flex-col flex-wrap justify-between gap-5 sm:px-16 px-6 py-10'>
        <div className='flex flex-col justify-start items-startgap-6 '>
        <Image src="/logo.svg" alt="Hero Image" 
               width={118} height={18} className='object-contain'/>
               <p className='text-base to-gray-800'>Car Hub <br /> All rights reserved &copy;2023</p>
        </div>
        <div className='footer__links'>
           {footerLinks.map((Link) =>(
            <div key={Link.title} className='footer__link'>
                <h3 className='font-extrabold'>{Link.title}</h3>

                {Link.links.map((item) =>(
                     
                     <div>{item.title}</div>
              
               
                ))}
            </div>
           ))}
        </div>
    </div>

    <div className='flex justify-between items-center flex-wrap mt-10 border-t border-gray-700
    sm:px-16 px-6 py-10'>
            <p className='sm:justify-center  px-2'>@2023 CarHub. All Rights Reserved</p>
      <div className='footer__copyrights-link'>
        <Link href="/"
        className='text-gray-800'>privacy Policy
        </Link>
          <Link href="/"
        className='text-gray-800 '>Terme of Use
        </Link>

      </div>

    </div>
   </footer>

   
  )
}

export default Footer