import React from 'react'

interface FilterButtonProps {
    filterId: string
    filterName: string;
    setFilterProp: (input: string) => void;
    filterProp : string;
  }


const FilterButton= ({ filterId, filterName, setFilterProp, filterProp } : FilterButtonProps) => {
  return (
    <button className={`py-2 px-4 rounded-lg text-base ${ filterProp == filterId ? 'bg-sky-500 text-white font-semibold' : 'bg-slate-300'} flex items-center justify-center capitalize hover:bg-sky-300`} onClick={()=>setFilterProp(filterId)}>
        {filterName}
    </button>
  )
}

export default FilterButton
