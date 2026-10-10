import React from "react";

import AboutHeroSection from "./AboutHeroSection";
import AboutEngin from "./AboutEngin";
import VisionAndMission from "./VisionAndMission";
import AboutValues from "./AboutValues";
import AboutJourney from "./AboutJourney";
import BeyondStructures from "./BeyondStructures";
import OurJourney from "./OurJourney";

function About() {
  return (
    <main>
      {/* AboutHeroSection, VisoinAndMission, AboutValues, BeyoundStructures, OurJourney, AboputEngin made Responsive */}

      <AboutHeroSection />
      <AboutEngin />
      <VisionAndMission />
      <AboutValues />
      <BeyondStructures />
      <OurJourney />
      <AboutJourney />
    </main>
  );
}

export default About;
