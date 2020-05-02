interface Experience {
  company: string;
  position: string;
  lengthOfService: string;
  duties: string;
}

interface ExperienceItems extends Array<Experience> {}

const experience: ExperienceItems = [
  {
    company: "Skiddle",
    position: "Web/JavaScript Developer",
    lengthOfService: "2019 - Ongoing",
    duties:
      "Focused on ReactJS to create a ‘Promotion Centre’ where promoters can post events.",
  },
  {
    company: "Gear4Music Ltd",
    position: "Web/JavaScript Developer",
    lengthOfService: "2018 - 2019",
    duties:
      "Using ReactJS to create a returns system for Customer Services, to allow them to process and complete returns efficiently and effectively.",
  },
  {
    company: "In Touch Networks",
    position: "Web Developer / PHP Developer / Javascript Developer",
    lengthOfService: "2016 - 2018",
    duties:
      "Time split between PHP and Javascript (React JS/Node JS), produced a fully working CRM for the sales team and a network portal for customers",
  },
  {
    company: "Bright Future Software",
    position: "Apprentice Software Developer",
    lengthOfService: "2014 - 2016",
    duties: "TODO",
  },
];

export default experience;
