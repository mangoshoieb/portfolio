import Approach from "@/components/Approach";
import Clients from "@/components/Clients";
import Experiences from "@/components/Experiences";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProject from "@/components/RecentProject";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { navItems } from "@/data";
import "./globals.css"
import '../output.css'
import { Grid } from "@react-three/drei";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center overflow-clip items-center flex-col mx-auto px-5 sm:px-10">
      <div className="w-full max-w-7xl ">
        <FloatingNav
        navItems={navItems}
        />
        <Hero />
        {/* <Grid/> */}
        <RecentProject/>
        <Clients/>
        <Experiences/>
        <Approach/>
        <Footer/>
      </div>
    </main>
  );
}
