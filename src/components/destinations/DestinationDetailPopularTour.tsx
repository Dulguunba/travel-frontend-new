import React from 'react'
import TourGridCard from '../tours/TourGridCard'
import { TourItemType } from '../utilities/TourType'
import { Roboto } from 'next/font/google'
import { Inter } from 'next/font/google'

const roboto = Roboto({
    subsets: ['latin'], 
    weight: ['400','500', '700' , '900'], 
    style: ['normal', 'italic'], 
  });

interface DestinationDetailPopularTourProps {
    toursData?: TourItemType[] 
}

const DestinationDetailPopularTour = ({toursData} : DestinationDetailPopularTourProps) => {
    console.log("props tour", toursData);
    
  return (
    <div className={`w-full flex justify-center ${roboto.className}`}>
        <div className='w-[1200px] flex flex-col items-center'>
            <h1 className={`uppercase text-2xl font-semibold ${roboto.className}`}>Popular tour packages</h1>
            <div className='w-full my-10 grid grid-cols-3 gap-5 font-bold'>
                {toursData?.length ? toursData.map((popularTour)=> <TourGridCard tour={popularTour}/>) : <p className='text-slate-500 font-light'>empty</p>}
                
            </div>
        </div>
      
    </div>
  )
}

export default DestinationDetailPopularTour
