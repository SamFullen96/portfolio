import React, { useState } from "react";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import CSS from "csstype";

import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./components/Navigation";
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import TopSection from "./components/TopSection";

function App() {
  const [height, setHeight] = useState(0);
  const [aboutMeHeight, setAboutMeHeight] = useState(0);
  const [currentSection, setCurrentSection] = useState<string | null>(null);
  const [showNav, setShowNav] = useState(false);

  useScrollPosition(({ currPos }) => {
    if (currPos.y <= -(height - height * 0.2)) {
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

  const styles: CSS.Properties = {
    // @ts-ignore
    display: showNav && "flex",
  };

  return (
    <div className="main">
      <Navigation hidden={!showNav} currentSection={currentSection} />

      <div className="content-container" style={styles}>
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
}

export default App;
