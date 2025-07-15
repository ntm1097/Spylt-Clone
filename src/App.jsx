
import HeroSection from "./Sections/HeroSection";
import Nav from "./Components/Nav.jsx";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import MessageSection from "./Sections/MessageSection";
import FlavorSection from "./Sections/FlavorSection";
import { useGSAP } from "@gsap/react";
import NutritionSection from "./Sections/NutritionSection";
import BenefitSection from "./Sections/BenefitSection";
import FooterSection from "./Sections/FooterSection.jsx";
import TestimonialSection from "./Sections/TestimonialSection.jsx";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <main>
      <Nav />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSection />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />
          <BenefitSection />
          <TestimonialSection />
          <FooterSection />
          </div>
          </div>
    </main>
  );
};

export default App;