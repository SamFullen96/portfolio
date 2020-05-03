import React from "react";
import skills from "../data/skills";
import SkillBar from "./SkillBar";

const SkillsChart = () => (
  <div className="skills">
    <small style={{ textAlign: "right", width: "100%" }}>
      Click the dropdown to view more info!
    </small>
    {skills.map((skill) => (
      <SkillBar {...skill} />
    ))}
  </div>
);

export default SkillsChart;
