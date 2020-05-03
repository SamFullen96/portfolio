import React, { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";

import "../App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";
import TopSection from "./TopSection";

const Main = () => {
  const [height, setHeight] = useState(0);
  const [aboutMeHeight, setAboutMeHeight] = useState(0);
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [showNav, setShowNav] = useState(false);

  useScrollPosition(({ currPos }) => {
    if (currPos.y <= -(height - height * 0.25)) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }

    if (currPos.y <= -(aboutMeHeight + height + 40)) {
      setCurrentSection("experience");
    } else {
      setCurrentSection("about");
    }
  });

  return (
    <div className="main">
      <Navigation hidden={!showNav} currentSection={currentSection} />

      <div className="content-container">
        <TopSection setHeight={setHeight} />
        <div className="main-content">
          <AboutMe setAboutMeHeight={setAboutMeHeight} />
          <hr />
          <Experience />
          <hr />
          <Projects />
        </div>
      </div>
    </div>
  );
};

export default Main;
