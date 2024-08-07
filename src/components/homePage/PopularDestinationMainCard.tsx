import React from 'react'
import { PopularDestinationType } from '../utilities/Types';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const PopularDestinationMainCard = ({picture, location, numberOfPackage}:  PopularDestinationType) => {
  return (
    <div className='w-full h-96 rounded-lg flex flex-col justify-end gap-4 p-8 relative cursor-pointer group overflow-hidden' >

        <div className='absolute top-0 right-0 w-full h-full  rounded-lg transition-all overflow-hidden group-hover:scale-105' style={{ backgroundImage: `url(${picture})`, backgroundPosition: 'center', backgroundSize: 'cover' }}></div>

        <div className='absolute top-0 right-0 w-full h-full bg-gradient-to-b from-transparent to-slate-950 to-60% rounded-lg opacity-20'></div>

        <h1 className='font-semibold text-2xl text-white z-0'>{location}</h1>

        <div className='flex gap-1'>
                <LocationOnIcon className='text-sky-500 z-0'/>
                <p className='text-white z-0'>{`${numberOfPackage}`} 
                    packages</p> 
        </div>

        <div className='flex gap-4 justify-start'>
                <button className='rounded-lg h-10 font-semibold w-24 text-sm flex justify-center items-center bg-white z-0'>Book Now</button>
                <button className='rounded-lg h-10 font-semibold w-24 text-sm flex justify-center items-center border border-white bg-transparent text-white z-0'>Learn more</button>
        </div>
      
    </div>
  )
}

export default PopularDestinationMainCard
