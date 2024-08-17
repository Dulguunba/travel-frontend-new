import LocationOn from '@mui/icons-material/LocationOn'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import React from 'react'
import AttachMoney from '@mui/icons-material/AttachMoney';
import { TourItemType } from '../utilities/TourType';


interface TourListProps {
    tour?: TourItemType; 
}

const TourListCard = ({tour}: TourListProps) => {
  return (
    <div className='w-full h-40 flex gap-20 group'>

        <div className='w-1/4 h-full rounded-lg overflow-hidden relative'>
            <img src="heroPicture.jpg" alt="tour picture"  className='absolute top-0 left-0 w-full h-full rounded-lg group-hover:scale-105 group-hover:rotate-1 transition-all ease-in-out duration-300'/>
            <div className='absolute top-0 left-0 w-full h-full rounded-lg opacity-0 bg-slate-800 group-hover:opacity-20 transition-all ease-in-out duration-300'></div>
        </div>

        <div className='w-1/2 h-full flex flex-col items-start justify-between gap-2 p-3 overflow-hidden'>
            <div className='text-sky-500 flex gap-3 tracking-wide uppercase'>
                <LocationOn/>
                <h2>{tour?.destination?.english}</h2>
            </div>
            <h2 className='capitalize text-xl font-semibold'>{tour?.name}</h2>
            <span className='text-sm h-14 overflow-hidden'>{tour?.additionalInfo}</span>
        </div>

        <div className='w-1/4 h-full flex flex-col items-start justify-between gap-2 p-3 text-sm'>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-2 items-center'>
                    <AccessTimeIcon className='text-base'/>
                    <p>{tour?.duration}</p>
                    <p>days</p>
                </div>

                <div className='flex gap-2 items-center'>
                    <AttachMoney className='text-base'/>
                    <p>Start from ₮</p>
                    <p>{tour?.price?.adultPrice?.toLocaleString()}</p>
                </div>
            </div>


            <div className='flex gap-5 w-full'>
                <button className='w-1/2 py-4 rounded-md flex justify-center items-center relative bg-sky-500 text-white font-semibold hover:bg-black'>Book Now</button>
                <button className='w-1/2 py-4 font-semibold rounded-md flex justify-center items-center text-sky-500 border border-sky-500 hover:bg-sky-500 hover:text-white'>Learn More</button>

            </div>

        </div>
      
    </div>
  )
}

export default TourListCard
