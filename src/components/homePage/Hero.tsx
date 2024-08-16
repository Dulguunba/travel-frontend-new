import React, { useState } from 'react'
import Header from '../header/Header'
import SearchIcon from '@mui/icons-material/Search';
import { useSearchInputStore } from '../utilities/SearchInput';

const Hero = () => {
    const [searchButton , setSearchButton]=useState(false)
    const updateSearchInput = useSearchInputStore((state)=> state.updateSearchInput)

  return (
    <div className='flex justify-center items-center w-full h-[900px] relative bg-[url("/hero2.jpg")] bg-center bg-origin-border bg-cover'>
        <Header/>
        <div className='w-full h-full flex flex-col items-center justify-center gap-10 '>
            <h1 className='text-black font-bold text-4xl'>UNFORGETABLE ADVENTURE</h1>
            <h2 className='text-white font-bold text-9xl'>MONGOLIAN TRAVEL</h2>
           
            <label className="relative w-1/3">
                <input className="placeholder:italic placeholder:text-white  bg-white bg-opacity-25 w-full border border-slate-300 rounded-md py-4 pl-3 pr-9 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm focus:bg-opacity-90" onClick={()=> setSearchButton(true)} onBlur={()=>setSearchButton(false)} onChange={(e)=>updateSearchInput(e.target.value)} placeholder="Explore your travel" type="text" name="search"/>

                <button className={`absolute inset-y-0 right-0 flex items-center p-3  rounded-r-lg text-black hover:bg-sky-500 hover:text-white ${searchButton? "bg-sky-500 text-white" : "bg-white"} `}>
                <SearchIcon/>
                </button>
            </label>
        </div>

      
    </div>
  )
}

export default Hero
