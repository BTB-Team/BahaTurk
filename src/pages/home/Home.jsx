import React from "react";

import Hero from "./Hero";
import BuildingSince from "./BuildingSince";

function Home() {
  return (
    <main className="w-full overflow-x-hidden bg-white">
      <Hero />
      <BuildingSince />
    </main>
  );
}

export default Home;