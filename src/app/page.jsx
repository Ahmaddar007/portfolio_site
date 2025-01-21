"use client"

import Customize_Section from "./components/Customize_section/page";
import Faqs from "./components/Faqs/page";
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
   <Hero />
   <ServiceCards />
   <Customize_Section />
   {/* <Portfolio />   //// */}
   <Faqs />
   <ContactForm />
   {/* <NewsLetter /> */}
   </>
  );
}
