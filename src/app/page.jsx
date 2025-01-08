"use client"

import LandingSlider from "./components/landingSlider/page";
import Accordian from "./Sections/Accordian/page";
import Carousel from "./Sections/Carousel/page";
import ContactForm from "./Sections/Contact-Form/page";
import Features from "./Sections/Feature-Section/page";
import Hero from "./Sections/Hero-Section/page";
import NewsLetter from "./Sections/NewsLetter/page";
import Portfolio from "./Sections/Portfolio/page";
import ServiceCards from "./Sections/Service-Cards/page";

export default function Home() {
  return (
   <>
   <LandingSlider />
   <Features />
   <Hero />
   <Carousel />
   
   <ServiceCards />
   {/* <Accordian /> */}
   <ContactForm />
   {/* <Portfolio /> */}
   <NewsLetter />
   </>
  );
}
