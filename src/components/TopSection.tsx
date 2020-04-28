import React, { useRef, useEffect } from "react";
import Particles from "react-particles-js";
import useIsMobile from "../hooks/useIsMobile";

type props = {
  setHeight: (e: number) => void;
};

const TopSection = ({ setHeight }: props) => {
  const isMobile = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      setHeight(ref.current.clientHeight);
    }
  }, [setHeight]);

  const params = {
    particles: {
      number: {
        value: isMobile ? 20 : 60,
      },
      size: {
        value: 1.2,
      },
      move: {
        speed: 1,
      },
    },
  };

  return (
    <div className="top-section" ref={ref}>
      <div className="particles-container">
        <Particles params={params} />
      </div>
      <div className="top-section__content-container">
        <div className="top-section__content">
          <h1 className="top-section__content--name">Sam Fullen</h1>
          <h1 className="top-section__content--subtitle">
            JavaScript Developer
          </h1>
          <div className="top-section__content--nav">
            <a href="#about">About Me</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopSection;
