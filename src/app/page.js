"use client"

import Before from "./components/beforeFooter/page";
import Heading from "./components/heading/page";
import Hero from "./components/hero/page";
import Reviews from "./components/reviews/page";
import Steps from "./components/steps/page";

export default function Home() {
  return (
    <>

    <div>
      <Steps />
      <Heading />
      <Reviews />
      <Hero />
      <Before />

      
      
    </div>
    </>
  );
}
