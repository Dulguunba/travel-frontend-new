import React from 'react'
import Header from '../header/Header'
import Link from 'next/link';
import { DestinationItemType } from '../utilities/DestinationTypes';

interface DestinationDetailHeroProps {
    destinationDetailData?: DestinationItemType
}

const DestinationDetailHero = ({destinationDetailData}: DestinationDetailHeroProps) => {
  return (
    <div className='w-full'>
        {/* <Header/> */}
        <div className="w-full h-[500px] relative">
            <div className={`flex justify-center items-center w-full h-full  bg-center bg-cover bg-no-repeat absolute top-0 left-0`} style={{ backgroundImage: `url(${destinationDetailData?.image})` }}></div>
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white gap-10'>
              <div className='w-full flex gap-10 text-xl justify-center font-semibold'>
                <Link href="/">Home</Link>
                <p>|</p>
                <p>Destinations</p>
                <p>|</p>
                <p>{destinationDetailData?.english}</p>
              </div>
              <h1 className=' text-8xl font-bold uppercase '>{destinationDetailData?.english}</h1>
            </div>
        </div>
    </div>
  )
}

export default DestinationDetailHero
