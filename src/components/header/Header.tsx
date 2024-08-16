import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CloudIcon from '@mui/icons-material/Cloud';

const Header = () => {
  return (
    <div className='flex justify-center items-center bg-white bg-opacity-70 w-full text-base text-black  font-semibold fixed top-0 left-0 right-0 z-10'>
        <div className=' flex items-center w-[1200px] h-24 justify-between py-1 text-lg'>
            <Link href={"/"}>
                <div className='w-20 h-20 flex justify-center items-center '>
                    <CloudIcon className='text-4xl text-slate-500'/>
                </div>
            </Link>
            <div className='gap-4 flex'>
                <Link href={"/tours"} className='cursor-pointer transition ease-in-out delay-50 duration-500 hover:bg-sky-500 hover:text-white p-3 rounded-lg w-32 text-center'>Tours</Link>
                <Link href={"/destinations"} className='cursor-pointer transition ease-in-out delay-50 duration-500 hover:bg-sky-500 hover:text-white p-3 rounded-lg w-32 text-center'>Destinations</Link>
                <Link href={"/blog"} className='cursor-pointer transition ease-in-out delay-50 duration-500 hover:bg-sky-500 hover:text-white p-3 rounded-lg w-32 text-center'>Blog</Link>
                <Link href={"/"} className='cursor-pointer transition ease-in-out delay-50 duration-500 hover:bg-sky-500 hover:text-white p-3 rounded-lg w-32 text-center'>Dashboard</Link>
            </div>
            <div className=' border cursor-pointer border-black bg-transparent py-3 px-5 items-center rounded-lg text-bse hover:bg-sky-500 hover:border-sky-500 hover:text-white  transition ease-in-out duration-500 hover:shadow-lg'>Sign in</div>
        </div>
      
    </div>
  )
}

export default Header
