import Image from "next/image";
import Hero from "@/components/Hero";
import Pillars from "@/components/Pillars";
import WhyChoose from "@/components/WhyChoose";
import Services from "@/components/Services";
import CasesTeaser from "@/components/CasesTeaser";
import Coverage from "@/components/Coverage";
import FinalCTA from "@/components/FinalCTA";
import Contact from "@/components/Contact";
import { BRAND } from "@/lib/brand";

export default function Home() {
  return (
    <>
      <Hero />
      <Pillars />
      <WhyChoose />
      <Services />
      <CasesTeaser />
      <Coverage />
      <FinalCTA />
      <Contact />
    </>
  );
}
