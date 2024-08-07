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
                    <SentimentSatisfiedAltIcon className='text-center text-6xl text-sky-500'/>
                    {/* <div className=' absolute top-0 left-4 rounded-lg  bg-white h-32 w-32 opacity-0  -z-10 group-hover:animate-spin group-hover:opacity-80 group-hover:shadow-lg' style={{animationIterationCount: 0.5, animationDuration: "0.8s"}}></div> */}
                </div>
                <h2 className='font-semibold'>Cutomer Delight</h2>
                <span className='text-center'>We deliver the best service and experience for our customer</span>
            </div>

            <div className='w-1/4 flex flex-col items-center justify-start gap-3'>
                <div className='w-40 rounded-lg h-32 flex justify-center items-center relative'>
                    <AccessAlarmIcon className='text-6xl text-sky-500'/>
                </div>
                <h2 className='font-semibold'>Time Flexibility</h2>
                <span className='text-center'>We welcome time flexibility of travelling for our dear customer</span>
            </div>

            <div className='w-1/4 flex flex-col items-center justify-start gap-3'>
                <div className='w-40 rounded-lg h-32 flex justify-center items-center relative'>
                    <HikingIcon className='text-6xl text-sky-500'/>
                </div>
                <h2 className='font-semibold'>Authentic Adventure</h2>
                <span className='text-center'>We deliver the real adventure experience for our dear customer</span>
            </div>

            <div className='w-1/4 flex flex-col items-center justify-start gap-3'>
                <div className='w-40 rounded-lg h-32 flex justify-center items-center relative'>
                    <FlagIcon className='text-6xl text-sky-500'/>
                </div>
                <h2 className='font-semibold'>Expert Guides</h2>
                <span className='text-center'>We deliver only expert tour giudes for our dear customer</span>
            </div>
        </div>
      
    </div>
  )
}

export default Advantages
