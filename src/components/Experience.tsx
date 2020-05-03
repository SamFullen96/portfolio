import React from "react";
import experience from "../data/experience";

type ExpProps = {
  company: string;
  position: string;
  lengthOfService: string;
  duties: string;
};

type company = string;

const Experience = () => (
  <div className="section experience">
    <div id="experience" className="anchor" />
    <h1>Experience</h1>
    {experience.map(
      ({ company, position, lengthOfService, duties }: ExpProps) => (
        <div className="experience__individual">
          <h2 className="experience__individual--company">{company}</h2>
          <h2 className="experience__individual--position">{position}</h2>
          <p className="experience__individual--length">{lengthOfService}</p>
          <p className="experience__individual--duties">{duties}</p>
        </div>
      )
    )}
  </div>
);

export default Experience;
