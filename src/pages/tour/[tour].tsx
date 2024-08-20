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
import { getTourById, getToursByDestination } from "@/components/functions/TourFetch";
import TourDetailHero from "@/components/tours/TourDetailHero";
import Carousel from "@/components/tours/Carousel";


const inter = Inter({ subsets: ["latin"] });


export default function TourHeroDetail () {

   const router = useRouter();
   const { tour } = router.query;  
   const tourId = tour?.toString()

   const [tourDetailData, setTourDetailData]= useState<TourItemType[]>([])

   useEffect(() => {
      const fetchTourData = async () => {
        if (tourId) {
            await getTourById(setTourDetailData, tourId);
            console.log('tour data by id', tourDetailData);
        }
      };
      fetchTourData();
    }, [tourId]);

 return(
   <main
   className={` flex min-h-screen flex-col items-center bg-white ${inter.className} relative`}
 >
   <Header/>
   <TourDetailHero tourDetailData={tourDetailData}/>
   <Carousel/>
   {/* <DestinationDetailHero destinationDetailData={destinationDetailData?.result}/> */}
   {/* <DestinationDetailPopularTour toursData={toursByDestination?.result}/> */}


 </main>
 )
}


