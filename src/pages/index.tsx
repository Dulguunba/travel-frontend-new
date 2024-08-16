import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/homePage/Hero";
import PopularDestination from "@/components/homePage/PopularDestination";
import Advantages from "@/components/homePage/Advantages";
import SpecialPackages from "@/components/homePage/SpecialPackages";
import FrequentlyAsked from "@/components/homePage/FrequentlyAsked";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` flex min-h-screen flex-col items-center relative`}
    >
      <Hero/>
      <PopularDestination/>
      <Advantages/>
      <SpecialPackages/>
      <FrequentlyAsked/>

    </main>
  );
}
