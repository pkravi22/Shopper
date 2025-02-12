import React from "react";
import Hero from "../component/hero/Hero";
import Women from "../component/populer/Women";

import Exclusive from "../component/Exclusive";
import NewCollection from "../component/NewCollection";
import Contact from "../component/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Women />
      <Exclusive />
      <NewCollection />
      <Contact />
    </div>
  );
};

export default Home;
