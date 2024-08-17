import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import DestinationBar from "@/components/destinations/DestinationBar";
import { useEffect, useState } from "react";
import { getDestination, getDestinationCategory } from "@/components/functions/DestinationFetch";
import { DestinationCategories, DestinationItemType, DestinationsType } from "@/components/utilities/DestinationTypes";
import DestinationGridCard from "@/components/destinations/DestinationGridCard";
import DestinationListCard from "@/components/destinations/DestinationListCard";
import TourHero from "@/components/tours/TourHero";
import { CategoriesType, TourItemType, ToursType } from "@/components/utilities/TourType";
import { getCategory, getTours } from "@/components/functions/TourFetch";
import TourBar from "@/components/tours/TourBar";
import TourGridCard from "@/components/tours/TourGridCard";
import TourListCard from "@/components/tours/TourListCard";


const inter = Inter({ subsets: ["latin"] });

export default function Tours() {

    const [tourCategoryData, setTourCategoryData] = useState<CategoriesType| undefined>(undefined)
    const [tourData, setTourData] = useState< ToursType| undefined>(undefined)
    const [filteredTours, setFilteredTours] = useState<TourItemType[]>([])
    const [tourCategoryFilter, setTourCategoryFilter] = useState('All')
    const [visualFilter, setVisualFilter] = useState(false)

    useEffect(()=>{
      getCategory(setTourCategoryData)
      getTours(setTourData)
    },[]) 

    const numberOfTours = tourData?.result?.length

    const filterTours = (tours: TourItemType[], filter: string): TourItemType[] => {
      if (filter === "All") {return tours};
      return tours.filter(tour => tour.categoryType.map(category=> category===filter));
    };  

    useEffect(() => {
      if (tourData?.result) {
        const filteredData = filterTours(tourData?.result, tourCategoryFilter);
        setFilteredTours(filteredData);
      }
  }, [tourCategoryFilter]);



    return (
      <main
        className={` flex min-h-screen flex-col items-center bg-white ${inter.className} relative`}
      >
        <Header/>
        <TourHero/>
        <TourBar
              tourCategories={tourCategoryData?.result}
              tourNumber={numberOfTours}
              tourCategoryFilter={tourCategoryFilter}
              setTourCategoryFilter={setTourCategoryFilter}
              visualFilter={visualFilter} 
              setVisualFilter={setVisualFilter}/>
        <div className={`w-[1200px] ${visualFilter ? "flex flex-col" : "grid grid-cols-3"}  gap-10`}>
            {filteredTours?.map((tour)=> visualFilter ? <TourListCard tour={tour} /> : <TourGridCard tour={tour}/>)}
        </div>
  
      </main>
    );
  }