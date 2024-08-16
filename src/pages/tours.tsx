import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import TourHero from "@/components/tours/TourHero";

const inter = Inter({ subsets: ["latin"] });

export default function Tours() {
    return (
      <main
        className={` flex min-h-screen flex-col items-center  ${inter.className} relative`}
      >
         <Header/>
         <TourHero/>

        {/* tours */}

  
      </main>
    );
  }