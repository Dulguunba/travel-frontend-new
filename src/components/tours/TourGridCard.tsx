import React from 'react'
import { TourItemType } from '../utilities/TourType';
import { LocationOn, Money } from '@mui/icons-material'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import Link from 'next/link';

interface TourGirdProps {
    tour?: TourItemType; 
}


const TourGridCard = ({tour}: TourGirdProps) => {
  return (
    <div className='w-full h-[300px] rounded-lg relative flex overflow-hidden group'>
        <img className='absolute top-0 left-0 w-full h-full rounded-lg transform transition-transform duration-300 ease-in-out hover:scale-105' alt='travel package picture' src={tour?.image?.mainImage} />
        <div className='bg-slate-800 opacity-20 absolute top-0 left-0 w-full h-full'></div>
        
        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-end gap-3 transform transition-transform duration-500 ease-in-out p-5 group-hover:translate-y-40 text-white z-0' >
            <h1 className=' font-semibold capitalize text-xl'>{tour?.name}</h1>
            <h2 className=' font-semibold text-xl'>Package</h2>
            <div className='w-full flex justify-between   text-md'>
                <div className='flex gap-3'>
                    <LocationOn/>
                    <p className='capitalize'>{tour?.destination?.english}</p>
                </div>
                <p> |</p>
                <div className='flex gap-3'>
                    <AttachMoneyIcon />
                    <p >{tour?.price?.adultPrice?.toLocaleString()}</p>
                    {/* toLocaleString() */}
                </div>
            </div>
        </div>
        
        {/* below div => at initial, invisible. when hovering, appear from left. when unhovering, dissapear to right */}
        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center transform -translate-x-full opacity-0 transition-transform  duration-500 ease-in-out group-hover:translate-x-0 group-hover:opacity-100'>
            <div className='w-full h-full absolute top-0 left-0 bg-slate-900 opacity-60'></div>
            <div className='w-full h-full p-5 flex flex-col items-center gap-3 z-0 text-white'>
                <h1 className='font-semibold text-xl capitalize  w-full flex justify-center'>{tour?.name}</h1>
                <h2 className='font-semibold text-xl w-full flex justify-center'>Package</h2>
                <div className='w-full flex justify-between  text-md'>
                    <div className='flex gap-3'>
                        <LocationOn/>
                        <p className='capitalize'>{tour?.destination?.english}</p>
                    </div>
                    <p> |</p>   
                    <div className='flex gap-3'>
                        <AttachMoneyIcon />
                        <p >{tour?.price?.adultPrice?.toLocaleString()}</p>
                        {/* toLocaleString() */}
                    </div>
                </div>
                <p className=' text-center h-[70px] text-base overflow-hidden'>{tour?.additionalInfo}</p>
                <Link href={`/tour/${tour?._id}`}><button className='border border-white p-3 rounded-lg hover:bg-sky-500'>Learn More</button></Link>
            </div>

        </div>



    </div>

  )
}

export default TourGridCard
