import React from "react";
import skills from "../data/skills";
import SkillBar from "./SkillBar";

const SkillsChart = () => (
  <div className="skills">
    {skills.map((skill) => (
      <SkillBar {...skill} />
    ))}
  </div>
);

export default SkillsChart;
