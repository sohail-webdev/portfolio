import { useState, useRef } from "react";

import Header from "./components/Header";
import Hero from "./components/Hero";
import Work from "./components/Work";
import Contact from "./components/Contact";

function App() {
  const [isMobileNavbarVisible, setIsMobileNavbarVisible] = useState(false);
  const about_ref = useRef(null);
  const work_ref = useRef(null);
  const contact_ref = useRef(null);
  const scroll_config_ref = useRef({
    behavior: "smooth",
    block: "start",
  });

  function scrollToSection(event) {
    const link = event.target;
    const section_name = link.dataset.name;
    switch (section_name) {
      case "about": {
        about_ref.current.scrollIntoView(scroll_config_ref.current);
        break;
      }
      case "work": {
        work_ref.current.scrollIntoView(scroll_config_ref.current);
        break;
      }
      case "contact": {
        contact_ref.current.scrollIntoView(scroll_config_ref.current);
        break;
      }
    }
  }

  function toggle_mobile_navbar() {
    setIsMobileNavbarVisible(prev => !prev);
  }

  return (
    <>
      <Header isMobileNavbarVisible={isMobileNavbarVisible} toggle_mobile_navbar={toggle_mobile_navbar} scrollToSection={scrollToSection} />
      <Hero scrollToSection={scrollToSection} ref={about_ref} />
      <Work ref={work_ref} />
      <Contact ref={contact_ref} />
    </>
  );
}

export default App;
