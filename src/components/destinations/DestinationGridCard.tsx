import React from 'react'
import { LocationOn } from '@mui/icons-material'
import PushPinIcon from '@mui/icons-material/PushPin';
import { DestinationItemType } from '../utilities/DestinationTypes';
import Link from 'next/link';

interface DestinationGridProps {
    destinationData?: DestinationItemType; 
}

const DestinationGridCard = ( {destinationData}: DestinationGridProps) => {
  return (
    <div className='w-full h-[300px] rounded-lg relative flex overflow-hidden group'>
        <img className='absolute top-0 left-0 w-full h-full rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105' alt='travel package picture' src={destinationData?.image}/>
        <div className='bg-slate-800 opacity-20 absolute top-0 left-0 w-full h-full'></div>
        
        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-end gap-3 transform transition-transform duration-500 ease-in-out p-5 group-hover:translate-y-40 text-white z-0' >
            <h1 className=' font-semibold text-xl capitalize'>{destinationData?.english} province</h1>
            <h2 className=' font-semibold text-xl'>Package</h2>
            <div className='w-full flex justify-between capitalize  text-md'>
                <div className='flex gap-3'>
                    <LocationOn/>
                    <p >{destinationData?.destinationCategory?.english}</p>
                </div>
                <p> |</p>
                <div className='flex gap-3'>
                    <PushPinIcon/>
                    <p >{destinationData?.destinationCategory?.name}</p>
                </div>
            </div>
        </div>

        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center transform -translate-x-full opacity-0 transition-transform  duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100'>
            <div className='w-full h-full absolute top-0 left-0 bg-slate-900 opacity-60'></div>
            <div className='w-full h-full p-5 flex flex-col items-center gap-3 z-0 text-white'>
                <h1 className='font-semibold text-xl w-full flex justify-center capitalize'>{destinationData?.english} province</h1>
                <h2 className='font-semibold text-xl w-full flex justify-center'>Package</h2>
                <div className='w-full flex justify-between  text-md capitalize'>
                    <div className='flex gap-3'>
                        <LocationOn/>
                        <p >{destinationData?.destinationCategory?.english}</p>
                    </div>
                    <p> |</p>   
                    <div className='flex gap-3'>
                        <PushPinIcon/>
                        <p >{destinationData?.destinationCategory?.name}</p>
                    </div>
                </div>
                <p className=' text-center h-[70px] text-base overflow-hidden'>{destinationData?.additionalInfo}</p>
                    <Link href={`/destination/${destinationData?._id}`}>
                    <button className='border border-white p-3 rounded-lg hover:bg-sky-500' >Learn More</button>
                </Link>
            </div>

        </div>



    </div>
  )
}

export default DestinationGridCard
