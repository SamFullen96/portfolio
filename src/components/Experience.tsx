import React from "react";
import experience from "../data/experience";

type ExpProps = {
  company: string;
  position: string;
  lengthOfService: string;
  duties: string;
};

const Experience = () => (
  <div className="section experience">
    <div id="experience" className="anchor" />
    <h1>Experience</h1>
    {experience.map(
      ({ company, position, lengthOfService, duties }: ExpProps) => (
        <p>{company}</p>
      )
    )}
  </div>
);

export default Experience;
