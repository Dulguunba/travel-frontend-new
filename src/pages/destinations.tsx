import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import DestinationHero from "@/components/destinations/DestinationHero";
import DestinationBar from "@/components/destinations/DestinationBar";
import { useEffect, useState } from "react";
import { getDestination, getDestinationCategory } from "@/components/functions/DestinationFetch";
import { DestinationCategories, DestinationItemType, DestinationsType } from "@/components/utilities/DestinationTypes";
import DestinationGridCard from "@/components/destinations/DestinationGridCard";
import DestinationListCard from "@/components/destinations/DestinationListCard";


const inter = Inter({ subsets: ["latin"] });

export default function Destinations() {
    const [destinationData, setDestinationData] = useState<DestinationsType | undefined>(undefined)
    const [filteredDestinations, setFilteredDestinations] = useState<DestinationItemType[]>([])
    const [categoryData, setCategoryData] = useState<DestinationCategories | undefined>(undefined)
    const [destinationCategoryFilter, setDestinationCategoryFilter] = useState('All')
    const [visualFilter, setVisualFilter] = useState(false)

    useEffect(()=>{
      getDestination(setDestinationData)
      getDestinationCategory(setCategoryData)
    },[]) 

    const numberOfDestination = destinationData?.result?.length

    const filterDestinations = (destinations: DestinationItemType[], filter: string): DestinationItemType[] => {
      if (filter === "All") return destinations;
      return destinations.filter(destination => destination.destinationCategory.english === filter);
    };  

    useEffect(() => {
      if (destinationData?.result) {
        const filteredData = filterDestinations(destinationData.result, destinationCategoryFilter);
        setFilteredDestinations(filteredData);
      }
  }, [destinationCategoryFilter]);



    return (
      <main
        className={` flex min-h-screen flex-col items-center bg-white ${inter.className} relative`}
      >
        <Header/>
        <DestinationHero/>
        <DestinationBar 
              destinationCategories={categoryData?.result} 
              destinationNumber={numberOfDestination} 
              destinationCategoryFilter={destinationCategoryFilter} setDestinationCategoryFilter={setDestinationCategoryFilter} visualFilter={visualFilter} 
              setVisualFilter={setVisualFilter}/>
        <div className={`w-[1200px] ${visualFilter ? "flex flex-col" : "grid grid-cols-3"}  gap-10`}>
            {filteredDestinations?.map((destination)=> visualFilter ? <DestinationListCard destinationData={destination} /> : <DestinationGridCard destinationData={destination}/>)}
        </div>
  
      </main>
    );
  }