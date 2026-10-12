import React from "react";

import Hero from "./Hero";
import BuildingSince from "./BuildingSince";
import FeaturedProject from "../../components/ui/FeaturedProject";
import Residences from "../../components/ui/Residences";
import Engineering from "./Engineering";
import Technology from "./Technology";
import SafetySection from "./SafetySection";
import AmenitiesSection from "./AmenitiesSection";
import LocationSection from "./LocationSection";
import ProjectCTA from "./ProjectCTA";

function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <Hero />
      <BuildingSince />
      <FeaturedProject />
      <Residences />
      <Engineering />
      <Technology />
      <SafetySection />
      <AmenitiesSection />
      <LocationSection />
      <ProjectCTA />
    </main>
  );
}

export default Home;
