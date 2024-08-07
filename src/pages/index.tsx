import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header/Header";
import Hero from "@/components/homePage/Hero";
import PopularDestination from "@/components/homePage/PopularDestination";
import Advantages from "@/components/homePage/Advantages";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={` flex min-h-screen flex-col items-center  ${inter.className} relative`}
    >
      <Hero/>
      <PopularDestination/>
      <Advantages/>

    </main>
  );
}
