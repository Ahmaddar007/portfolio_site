import Contact from "./components/Contact/page";
import Infinite_Carousel from "./components/Infinite_carousel/page";
import LandingSlider from "./components/landingSlider/page";

export default function Home() {
  return (
   <>
   <LandingSlider />
    <Infinite_Carousel />
    <Contact />
   </>
  );
}
