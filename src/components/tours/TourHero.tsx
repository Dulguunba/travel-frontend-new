import React from 'react'
import Header from "@/components/header/Header";
import Link from 'next/link';

const TourHero = () => {
  return (
    <div className='w-full'>
        <Header/>
        <div className="w-full h-[500px] relative">
            <div className="flex justify-center items-center w-full h-full  bg-[url('/tourHome.jpg')] bg-center bg-cover bg-no-repeat absolute top-0 left-0"></div>
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white gap-10'>
              <div className='w-full flex gap-10 text-xl justify-center font-semibold'>
                <Link href="/">Home</Link>
                <p>|</p>
                <p>Tour</p>
              </div>
              <h1 className=' text-8xl font-bold '>TOUR PACKAGES</h1>
            </div>
        </div>
    </div>
  )
}

export default TourHero 
