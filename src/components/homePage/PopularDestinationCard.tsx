import React from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { PopularDestinationType } from '../utilities/Types';



const PopularDestinationCard = ({picture, location, numberOfPackage}:  PopularDestinationType ) => {
  return (
    <div className='w-full flex flex-col items-start justify-start gap-5 group cursor-pointer'>
        <div className='overflow-hidden rounded-lg'>
          <div className={`w-72 h-72  transition-all overflow-hidden rounded-lg group-hover:scale-105`} style={{ backgroundImage: `url(${picture})`, backgroundPosition: 'center', backgroundSize: 'cover' }}>
          </div>
        </div>
        <h1 className='font-semibold ml-4 text-2xl'>{location}</h1>
        <div className='flex gap-1 ml-4'>
                <LocationOnIcon className='text-sky-500'/>
                <p>{`${numberOfPackage}`} packages</p>
        </div>
      
    </div>
  )
}

export default PopularDestinationCard 
