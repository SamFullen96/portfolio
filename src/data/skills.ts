interface Skill {
  name: string;
  percentage: number;
}

interface Skills extends Array<Skill> {}

const skills: Skills = [
  {
    name: "React JS",
    percentage: 90,
  },
  {
    name: "Express JS",
    percentage: 85,
  },
  { name: "Lambda", percentage: 80 },
  { name: "Typescript", percentage: 65 },
  { name: "PHP", percentage: 70 },
  { name: "HTML", percentage: 90 },
  { name: "CSS", percentage: 85 },
  { name: "GIT", percentage: 90 },
  { name: "Agile", percentage: 75 },
  { name: "TDD", percentage: 50 },
  { name: "MySql", percentage: 70 },
];

export default skills;
