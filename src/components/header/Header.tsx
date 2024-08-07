import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-center items-center bg-white bg-opacity-20 w-full text-sm text-white font-semibold fixed top-0 left-0 right-0'>
        <div className=' flex items-center w-[1200px] h-24 justify-between py-1'>
            <Link href={"/"}>
                <div className='w-20 h-20 flex justify-center items-center rounded-full bg-white'>
                    <img src="mainLogo.png" alt="logo picture" className='rounded-full w-full ' />
                </div>
            </Link>
            <div className='gap-4 flex'>
                <Link href={"/"} className='cursor-pointer transition ease-in-out delay-50 duration-500 hover:bg-sky-500 p-3 rounded-lg w-32 text-center'>Tours</Link>
                <Link href={"/"} className='cursor-pointer transition ease-in-out delay-50 duration-500 hover:bg-sky-500 p-3 rounded-lg w-32 text-center'>Destinations</Link>
                <Link href={"/"} className='cursor-pointer transition ease-in-out delay-50 duration-500 hover:bg-sky-500 p-3 rounded-lg w-32 text-center'>Blog</Link>
                <Link href={"/"} className='cursor-pointer transition ease-in-out delay-50 duration-500 hover:bg-sky-500 p-3 rounded-lg w-32 text-center'>Dashboard</Link>
            </div>
            <div className=' border cursor-pointer border-white bg-transparent py-3 px-5 items-center rounded-lg text-sm hover:bg-sky-500  transition ease-in-out delay-50 duration-500 hover:shadow-lg'>Sign in</div>
        </div>
      
    </div>
  )
}

export default Header
