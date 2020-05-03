import React, { useState } from "react";
import Slide from "react-reveal/Slide";

type Props = {
  name: string;
  percentage: number;
  details: string;
};

const SkillBar = ({ name, percentage, details }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="skills__bar">
        <span className="skills__bar--name">{name}</span>
        <span className="skills__bar--percentage-background">
          <Slide left>
            <span
              className="skills__bar--percentage"
              style={{ width: `${percentage - 10}%` }}
            >
              {percentage}%
            </span>
          </Slide>
          <span
            className="skills__bar--dropdown-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`fas fa-caret-${isOpen ? "up" : "down"}`} />
          </span>
        </span>
      </div>
      {isOpen && (
        <div className="skills__bar--dropdown">
          <p>{details}</p>
        </div>
      )}
    </>
  );
};

export default SkillBar;
