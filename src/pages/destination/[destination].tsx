import DestinationDetailHero from "@/components/destinations/DestinationDetailHero";
import { getDestinationId } from "@/components/functions/DestinationFetch";
import Header from "@/components/header/Header";
import { DestinationIdItemType, DestinationItemType, DestinationsType } from "@/components/utilities/DestinationTypes";
import { Inter } from "next/font/google";
import { Roboto } from "next/font/google";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import DestinationDetailPopularTour from "@/components/destinations/DestinationDetailPopularTour";
import { TourItemType, ToursType } from "@/components/utilities/TourType";
import { getToursByDestination } from "@/components/functions/TourFetch";


const inter = Inter({ subsets: ["latin"] });


export default function DestinationHeroDetail () {

   const router = useRouter();
   const { destination } = router.query;  
   const destinationId = destination?.toString()
   console.log("query destionation", destination, typeof destination)

   const [destinationDetailData, setDestinationDetailData]= useState<DestinationIdItemType | undefined>(undefined)

   const [toursByDestination, setToursByDestination]= useState<ToursType>()

   useEffect(() => {
      const fetchDestinationData = async () => {
        if (destinationId) {
            await getDestinationId(setDestinationDetailData, destinationId);
            console.log('destinationdata id', destinationDetailData);
            await getToursByDestination(setToursByDestination, destinationId)
            console.log('tourdata by destination id', toursByDestination);
        }
      };
      fetchDestinationData();
    }, [destinationId]);

 return(
   <main
   className={` flex min-h-screen flex-col items-center bg-white ${inter.className} relative`}
 >
   <Header/>
   <DestinationDetailHero destinationDetailData={destinationDetailData?.result}/>
   <DestinationDetailPopularTour toursData={toursByDestination?.result}/>


 </main>
 )
}


