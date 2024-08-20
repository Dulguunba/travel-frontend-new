import React from 'react'
import { TourItemType } from '../utilities/TourType'
import Link from 'next/link'

interface TourDetailHeroProps {
    tourDetailData: TourItemType []
}

const TourDetailHero = ({tourDetailData} : TourDetailHeroProps) => {

    const tourData =  tourDetailData[0] ;

  return (
    <div className='w-full'>
        {/* <Header/> */}
        <div className="w-full h-[500px] relative">
            <div className={`flex justify-center items-center w-full h-full  bg-center bg-cover bg-no-repeat absolute top-0 left-0`} style={{ backgroundImage: `url(${tourData?.image?.mainImage})` }}></div>
            <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white gap-10'>
              <div className='w-full flex gap-10 text-xl justify-center font-semibold'>
                <Link href="/">Home</Link>
                <p>|</p>
                <Link href="/tours">Tours</Link>
                <p>|</p>
                <p className='capitalize'>{tourData?.name}</p>
              </div>
              <h1 className=' text-8xl font-bold uppercase '>{tourData?.name}</h1>
            </div>
        </div>

        {/* <div className='w-full flex justify-center my-16'>
            <div className='w-[1200px] grid grid-cols-2 gap-10 text-slate-500 text-sm'>
                <div>{destinationDetailData?.additionalInfo?.slice(0,additionalInfoLength)}
                </div>
                <div>{destinationDetailData?.additionalInfo?.slice(additionalInfoLength)}
                </div>
            </div>
        </div> */}



    </div>
  )
}

export default TourDetailHero
