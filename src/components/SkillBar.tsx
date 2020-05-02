import React, { useState } from "react";

type Props = {
  name: string;
  percentage: number;
};

const SkillBar = ({ name, percentage }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="skills__bar">
        <span className="skills__bar--name">{name}</span>
        <span className="skills__bar--percentage-background">
          <span
            className="skills__bar--percentage"
            style={{ width: `${percentage - 10}%` }}
          >
            {percentage}%
          </span>
          <span
            className="skills__bar--dropdown-button"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className={`fas fa-caret-${isOpen ? "up" : "down"}`} />
          </span>
        </span>
      </div>
      {isOpen && <div className="skills__bar--dropdown">More info</div>}
    </>
  );
};

export default SkillBar;
