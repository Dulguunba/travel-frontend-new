import Header from "@/components/header/Header";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Blog() {
    return (
      <main
        className={` flex min-h-screen flex-col items-center  ${inter.className} relative`}
      >
        <Header/>

        blogs

  
      </main>
    );
  }