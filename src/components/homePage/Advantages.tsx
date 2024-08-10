import React from 'react'
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import HikingIcon from '@mui/icons-material/Hiking';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import FlagIcon from '@mui/icons-material/Flag';

const Advantages = () => {
  return (
    <div className='w-full relative my-10 flex justify-center' >

        <div className='w-full absolute top-0 bottom-0' style={{backgroundImage: `url(/advantageBackground.jpg)` , backgroundPosition: 'center', backgroundSize: 'cover', opacity: 0.3}}></div>

        <div className='flex w-[1200px] justify-between gap-5 py-20 z-0'>

            <div className='w-1/4 flex flex-col items-center justify-start gap-3 group'>
                <div className='w-40 rounded-lg h-32 flex justify-center items-center relative'>
                    <SentimentSatisfiedAltIcon className='text-center text-6xl text-sky-500 
                    transform transition-transform duration-1000 scale-100 ease-in-out group-hover:scale-0  group-hover:animate-spin-once 
                    '/>
                    <div className='bg-white absolute shadow-lg top-0 left-0 w-40 h-32 flex justify-center items-center rounded-lg transform scale-0 transition-transform duration-500 ease-in-out group-hover:scale-100  group-hover:animate-spin-once'>
                        <SentimentSatisfiedAltIcon className='text-6xl text-sky-500'/>
                    </div>
                </div>
                <h2 className='font-semibold'>Cutomer Delight</h2>
                <span className='text-center'>We deliver the best service and experience for our customer</span>
            </div>

            <div className='w-1/4 flex flex-col items-center justify-start gap-3 group'>
                <div className='w-40 rounded-lg h-32 flex justify-center items-center relative'>
                    <AccessAlarmIcon className='text-center text-6xl text-sky-500 
                    transform transition-transform duration-1000 scale-100 ease-in-out group-hover:scale-0  group-hover:animate-spin-once 
                    '/>
                    <div className='bg-white absolute shadow-lg top-0 left-0 w-40 h-32 flex justify-center items-center rounded-lg transform scale-0 transition-transform duration-500 ease-in-out group-hover:scale-100  group-hover:animate-spin-once'>
                        <AccessAlarmIcon className='text-6xl text-sky-500'/>
                    </div>
                </div>
                <h2 className='font-semibold'>Time Flexibility</h2>
                <span className='text-center'>We welcome time flexibility of travelling for our dear customer</span>
            </div>

            <div className='w-1/4 flex flex-col items-center justify-start gap-3 group'>
                <div className='w-40 rounded-lg h-32 flex justify-center items-center relative'>
                    <HikingIcon className='text-center text-6xl text-sky-500 
                    transform transition-transform duration-1000 scale-100 ease-in-out group-hover:scale-0  group-hover:animate-spin-once 
                    '/>
                    <div className='bg-white absolute shadow-lg top-0 left-0 w-40 h-32 flex justify-center items-center rounded-lg transform scale-0 transition-transform duration-500 ease-in-out group-hover:scale-100  group-hover:animate-spin-once'>
                        <HikingIcon className='text-6xl text-sky-500'/>
                    </div>
                </div>
                <h2 className='font-semibold'>Authentic Adventure</h2>
                <span className='text-center'>We deliver the real adventure experience for our dear customer</span>
            </div>

            <div className='w-1/4 flex flex-col items-center justify-start gap-3 group'>
                <div className='w-40 rounded-lg h-32 flex justify-center items-center relative'>
                    <FlagIcon className='text-center text-6xl text-sky-500 
                    transform transition-transform duration-1000 scale-100 ease-in-out group-hover:scale-0  group-hover:animate-spin-once 
                    '/>
                    <div className='bg-white absolute shadow-lg top-0 left-0 w-40 h-32 flex justify-center items-center rounded-lg transform scale-0 transition-transform duration-500 ease-in-out group-hover:scale-100  group-hover:animate-spin-once'>
                        <FlagIcon className='text-6xl text-sky-500'/>
                    </div>
                </div>
                <h2 className='font-semibold'>Expert Guides</h2>
                <span className='text-center'>We deliver only expert tour giudes for our dear customer</span>
            </div>
        </div>
      
    </div>
  )
}

export default Advantages
