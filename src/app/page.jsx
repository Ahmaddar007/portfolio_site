"use client"

import LandingSlider from "./components/landingSlider/page";
import ContactForm from "./Sections/Contact-Form/page";
import Features from "./Sections/Feature-Section/page";
import Hero from "./Sections/Hero-Section/page";
import NewsLetter from "./Sections/NewsLetter/page";
import ServiceCards from "./Sections/Service-Cards/page";

export default function Home() {
  return (
   <>
   <LandingSlider />
   <Features />
   <Hero />
   
   <ServiceCards />
   <ContactForm />
   <NewsLetter />
   </>
  );
}
