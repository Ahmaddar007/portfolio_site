"use client"

import LandingSlider from "./components/landingSlider/page";
import Features from "./Sections/Feature-Section/page";
import Hero from "./Sections/Hero-Section/page";
import ServiceCards from "./Sections/Service-Cards/page";

export default function Home() {
  return (
   <>
   <LandingSlider />
   <Features />
   <Hero />
   <ServiceCards />
   </>
  );
}
