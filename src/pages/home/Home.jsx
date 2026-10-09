import React from "react";

import Hero from "./Hero";
import BuildingSince from "./BuildingSince";
import FeaturedProject from "../../components/ui/FeaturedProject";
import Residences from "../../components/ui/Residences";
import Engineering from "./Engineering";
import Technology from "./Technology";

function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <Hero />
      <BuildingSince />
      <FeaturedProject/>
      <Residences/>
      <Engineering/>
      <Technology/>
    </main>
  );
}

export default Home;