import React from 'react'
import PopularDestinationCard from './PopularDestinationCard'
import PopularDestinationMainCard from './PopularDestinationMainCard'
const PopularDestination = () => {
    const mockData ={
        first:{
        picture: "/popularDestination3.jpg",
        location: 'Uvurkhangai',
        numberOfPackage: 15},
        second:{
            picture: "/popularDestination1.jpg",
            location: 'Khuvgul',
            numberOfPackage: 12},
        third:{
            picture: "/popularDestination2.jpg",
            location: 'Arkhangai',
            numberOfPackage: 4},        
    }

  return (
    <div className='w-[1200px] flex flex-col items-center justify-start py-32'>
        <h1 className='font-bold text-4xl py-4'>POPULAR DESTINATIONS</h1>
        <p className='text-gray-600 text-lg'>Explore our top destinations right from our  beloved clients' reviews</p>
        <div className='flex items-start justify-between gap-4 pt-16 w-full'>

            <div className='w-1/4 '>
               <PopularDestinationCard {...mockData.third}/>
            </div>
            <div className='w-1/2'>
                <PopularDestinationMainCard {...mockData.first}/>
            </div>
            <div className='w-1/4'>
                <PopularDestinationCard {...mockData.second}/>
            </div>
        </div>
      
    </div>
  )
}

export default PopularDestination
