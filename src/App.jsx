import { useState } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  const [isMobileNavbarVisible, setIsMobileNavbarVisible] = useState(false);

  function toggle_mobile_navbar() {
    setIsMobileNavbarVisible(prev => !prev);
  }

  return (
    <>
      <Header isMobileNavbarVisible={isMobileNavbarVisible} toggle_mobile_navbar={toggle_mobile_navbar} />
      <Hero />
      <Work />
      <Contact />
    </>
  );
}

export default App;
