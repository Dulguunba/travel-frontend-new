import Link from 'next/link'
import React from 'react'

const SpecialPackages = () => {
  return (
    <div className='w-full flex justify-center my-32 '>
        <div className='flex w-[1200px] flex-col gap-4'>
            <div className='flex justify-between mb-10'>
                <div className='flex flex-col gap-2 items-start'>
                    <h1 className='font-bold text-4xl'>SPECIAL PACKAGES</h1>
                    <p className='text-slate-500'>Get special travel packages made tailored your needs</p>
                </div>
                <Link href={"/"} className='text-sky-500 underline flex justify-end items-center'>See More Packages</Link>

            </div>
            <div className='w-full flex gap-10 h-[600px] '>
                <div className='flex w-1/3 h-full relative text-white text-3xl font-semibold rounded-lg overflow-hidden group'>
                    <div className='absolute top-0 left-0 w-full h-full rounded-lg bg-[url("/specialPackage1.jpg")] bg-center bg-origin-border bg-cover group-hover:scale-105 transition-all duration-500 group-hover:rotate-1'>      
                    </div>

                    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-t bg-black from-bg-tranparent to-20% opacity-40 group-hover:bg-transparent transition-all duration-500'></div>

                    <h2 className='absolute top-4 right-4'>01</h2>
                    <div className='absolute bottom-4 left-4 flex-col'>
                        <h2>Cultural</h2> 
                        <h2>Immersion</h2> 
                        <h2>Package</h2>
                    </div>
                </div>

                <div className='w-3/4 h-full flex flex-col gap-4'>
                    <div className='w-full h-2/3 relative rounded-lg'>
                        <div className='absolute top-0 left-0 w-full h-full rounded-lg bg-[url("/specialPackage2.jpg")] bg-center bg-origin-border bg-cover'></div>
                        <h2 className='absolute top-4 right-4 text-white text-3xl font-semibold '>02</h2>
                    </div>
                    <div className='w-full h-1/3 flex items-end justify-start'>
                        <h1 className='w-1/2 h-full font-bold text-4xl flex  items-center leading-normal'>EXCAPE TO <br/> PARADISE</h1>
                        <div className='w-1/2 h-full gap-5 flex flex-col items-start justify-center'>
                            <p className='text-slate-600 text-sm'>Bask in the warm tropical sun with our exclusive Tropical Escape Package. This 7-day trip takes you to the most stunning tropical islands.</p>
                            <button className='bg-sky-500 text-white text-sm rounded-md p-4'>BOOK NOW</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default SpecialPackages
