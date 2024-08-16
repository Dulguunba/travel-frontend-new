import LocationOn from '@mui/icons-material/LocationOn'
import TerrainIcon from '@mui/icons-material/Terrain';
import React from 'react'
import MapIcon from '@mui/icons-material/Map';
import { DestinationItemType } from '../utilities/DestinationTypes';


interface DestinationListProps {
    destinationData?: DestinationItemType; 
}

const DestinationListCard = ( {destinationData}: DestinationListProps) => {
  return (
    <div className='w-full h-40 flex gap-20 group'>

        <div className='w-1/4 h-full rounded-lg overflow-hidden relative'>
            <img src={destinationData?.image} alt="tour picture"  className='absolute top-0 left-0 w-full h-full rounded-lg group-hover:scale-105 group-hover:rotate-1 transition-all ease-in-out duration-300'/>
            <div className='absolute top-0 left-0 w-full h-full rounded-lg opacity-0 bg-slate-800 group-hover:opacity-20 transition-all ease-in-out duration-300'></div>
        </div>

        <div className='w-1/2 h-full flex flex-col items-start justify-between gap-2 p-3 overflow-hidden'>
            <div className='text-sky-500 flex gap-3 tracking-wide uppercase'>
                <LocationOn/>
                <h2>{destinationData?.destinationCategory?.english}</h2>
            </div>
            <h2 className='capitalize text-xl font-semibold'>{destinationData?.english + ' province'}</h2>
            <span className='text-sm h-14 overflow-hidden'>{destinationData?.additionalInfo}</span>
        </div>

        <div className='w-1/4 h-full flex flex-col items-start justify-between gap-2 p-3 text-sm'>
            <div className='flex flex-col gap-3'>
                <div className='flex gap-2 items-center'>
                    <MapIcon className='text-base'/>
                    <p className='capitalize'>{destinationData?.name + ' аймаг'}</p>
                </div>

                <div className='flex gap-2 items-center capitalize'>
                    <TerrainIcon className='text-base'/>
                    <p>{destinationData?.destinationCategory.name}</p>
                </div>
            </div>


            <div className='flex gap-5 w-full'>
                <button className='w-1/2 py-4 rounded-md flex justify-center items-center relative bg-sky-500 text-white font-semibold hover:bg-black'>Learn More</button>
                <button className='w-1/2 py-4 rounded-md flex justify-center items-center relative bg-white text-sky-500 border border-sky-500 font-semibold hover:bg-sky-500 hover:text-white'>Book Now</button>

            </div>

        </div>
      
    </div>
  )
}

export default DestinationListCard
