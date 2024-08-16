import React from 'react'
import Searchtab from './Searchtab'
import { DestinationCategories, DestinationCategoryItem, DestinationCategoryItemType } from '../utilities/DestinationTypes'
import FilterButton from './FilterButton';
import ListFilter from './ListFilter';
import GridFilter from './GridFilter';

interface DestinationBarProps {
    destinationCategories?: DestinationCategoryItemType[]; 
    destinationNumber? : number;
    destinationCategoryFilter : string;
    visualFilter? : boolean;
    setDestinationCategoryFilter: (input: string) => void;
    setVisualFilter: (input: boolean) => void;

}

const DestinationBar = ({ destinationCategories, destinationNumber, destinationCategoryFilter, setDestinationCategoryFilter, visualFilter, setVisualFilter} : DestinationBarProps )=> {
  return (
    <div className='w-[1200px] my-10'>
        <div className='w-full flex flex-col  gap-4'>
            <div className='flex justify-between'>
                <h1 className='uppercase font-semibold text-2xl'>Destinations {`( ` + destinationNumber + ` )`} </h1>
                <Searchtab/>
            </div>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <FilterButton categoryName='All'setDestinationCategoryFilter={setDestinationCategoryFilter} destinationCategoryFilter={destinationCategoryFilter}/>

                    {destinationCategories?.map((category)=> <FilterButton categoryName={category.english} setDestinationCategoryFilter={setDestinationCategoryFilter} destinationCategoryFilter={destinationCategoryFilter}/>)}

                </div>
                <div className='flex gap-2'>
                <GridFilter visualFilter={visualFilter} setVisualFilter={setVisualFilter}/>
                    <ListFilter visualFilter={visualFilter} setVisualFilter={setVisualFilter}/>

                </div>

            </div>
        
        </div>
    </div>
  )
}

export default DestinationBar
