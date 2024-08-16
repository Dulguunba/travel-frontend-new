import React from 'react'

interface FilterButtonProps {
    categoryName: string;
    setDestinationCategoryFilter: (input: string) => void;
    destinationCategoryFilter : string;
  }


const FilterButton= ({ categoryName, setDestinationCategoryFilter, destinationCategoryFilter } : FilterButtonProps) => {
  return (
    <button className={`py-2 px-4 rounded-lg text-base ${ destinationCategoryFilter == categoryName ? 'bg-sky-500 text-white font-semibold' : 'bg-slate-300'} flex items-center justify-center capitalize hover:bg-sky-300`} onClick={()=>setDestinationCategoryFilter(categoryName)}>
        {categoryName}
    </button>
  )
}

export default FilterButton
