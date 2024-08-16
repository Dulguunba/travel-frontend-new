import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useSearchInputStore } from '../utilities/SearchInput';

const Searchtab = () => {
    const updateSearchInput = useSearchInputStore((state)=> state.updateSearchInput)

  return (
    <div className='w-52 flex gap-3 border-b border-slate-300 bg-white'>
        <input type="text" name='searchtab'  className="bg-white placeholder:italic placeholder:text-slate-600  w-full text-sm p-3 focus:border-none" placeholder="Search..." onChange={(e)=>updateSearchInput(e.target.value)} />
        <button className={` flex items-center p-3   text-black `}>
                <SearchIcon className='text-black'/>
        </button>
      
    </div>
  )
}

export default Searchtab
