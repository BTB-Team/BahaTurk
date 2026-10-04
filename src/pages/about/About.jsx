
import React from "react";

import AboutValues from "./AboutValues";
import AboutEngin from "./AboutEngin";
import AboutJourney from "./AboutJourney";

function About() {
  return (
    <main className="about-page min-h-screen overflow-hidden bg-white text-[#071b35]">
      <AboutEngin />
      <AboutValues />
      <AboutJourney />
    </main>
  );
}

export default About;


