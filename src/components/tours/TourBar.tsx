import React from 'react'
import Searchtab from '../destinations/Searchtab';
import { DestinationCategoryItemType } from '../utilities/DestinationTypes'
import FilterButton from '../destinations/FilterButton';
import ListFilter from '../destinations/ListFilter';
import GridFilter from '../destinations/GridFilter';
import { CategoryItemType } from '../utilities/TourType';


interface TourBarProps {
    tourCategories?: CategoryItemType[]; 
    tourNumber? : number;
    tourCategoryFilter : string;
    setTourCategoryFilter: (input: string) => void;
    visualFilter? : boolean;
    setVisualFilter: (input: boolean) => void;

}

const TourBar = ({ tourCategories, tourNumber, setTourCategoryFilter, tourCategoryFilter, visualFilter, setVisualFilter} : TourBarProps ) => {
  return (
    <div className='w-[1200px] my-10'>
        <div className='w-full flex flex-col  gap-4'>
            <div className='flex justify-between'>
                <h1 className='uppercase font-semibold text-2xl'>Destinations {`( ` + tourNumber + ` )`} </h1>
                <Searchtab/>
            </div>
            <div className='flex justify-between'>
                <div className='flex gap-2'>
                    <FilterButton filterName='All' filterId='' setFilterProp={setTourCategoryFilter} filterProp={tourCategoryFilter}/>

                    {tourCategories?.map((category)=> <FilterButton filterName={category.english} filterId={category._id} setFilterProp={setTourCategoryFilter} filterProp={tourCategoryFilter}/>)}

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

export default TourBar
