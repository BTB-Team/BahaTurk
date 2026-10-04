import React from "react";

import Hero from "./Hero";
import BuildingSince from "./BuildingSince";
import Residences from "../../components/ui/Residences";
import Technology from "./Technology";
import Safety from "./Safety";
import Amenities from "./Amenities";
import Location from "./Location";
import FeaturedProject from "../../components/ui/FeaturedProject";
import Engineering from "./Engineering";

function Home() {
  return (
    <main className="w-full bg-white">

      <Hero />
      <BuildingSince />
      <FeaturedProject/>
    < Residences />
    <Engineering/>
      <Technology />
      <Safety />
      <Amenities />
      <Location />

    </main>
  );
}

export default Home;