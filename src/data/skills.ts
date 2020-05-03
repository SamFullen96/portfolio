interface Skill {
  name: string;
  percentage: number;
  details: string;
}

interface Skills extends Array<Skill> {}

const skills: Skills = [
  {
    name: "React JS",
    percentage: 90,
    details: `3+ years commercial experience across a range of projects, both freelance and in full-time employment. \n\n I keep up-to-date with React's lastest developments, including Hooks. I have used Redux in multiple projects and have experience using React in conjunction with Typescript`,
  },
  {
    name: "Express JS",
    percentage: 85,
    details: "More info",
  },
  { name: "Lambda", percentage: 80, details: "More info" },
  { name: "Typescript", percentage: 65, details: "More info" },
  { name: "PHP", percentage: 70, details: "More info" },
  { name: "HTML", percentage: 90, details: "More info" },
  { name: "CSS", percentage: 85, details: "More info" },
  { name: "GIT", percentage: 90, details: "More info" },
  { name: "Agile", percentage: 75, details: "More info" },
  { name: "TDD", percentage: 50, details: "More info" },
  { name: "MySql", percentage: 70, details: "More info" },
];

export default skills;
