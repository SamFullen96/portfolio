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
    details: `3+ years commercial experience across a range of projects, both freelance and in full-time employment. \n\nI keep up-to-date with React's lastest developments, including Hooks. I have used Redux in multiple projects and have experience using React in conjunction with Typescript`,
  },
  {
    name: "Express JS",
    percentage: 85,
    details:
      "2-3 years commercial experience creating APIs with Express.js. Built an API from the ground up and was the sole maintainer for most of my time at In Touch Networks.",
  },
  {
    name: "Lambda",
    percentage: 80,
    details:
      "1+ year commercial experience using Lambda. Most recently used Lambda to create an image processing function that would compress and resize an image stored on S3 so it was suitable to be displayed on the site. \n\nHave used Lambda to experiement with Alexa skills.",
  },
  {
    name: "Typescript",
    percentage: 65,
    details:
      "Used Typescript in personal and freelance projects and very much enjoy the rubustness it brings to regular JS. Have used in conjuction with React JS.",
  },
  {
    name: "PHP",
    percentage: 70,
    details:
      "1-2 years commercial experience. Started out my development career as a Junior PHP developer and became quite experienced in core PHP as well as frameworks such as Laravel and Codeigniter.",
  },
  {
    name: "HTML",
    percentage: 90,
    details:
      "The staple of any web developer. 4-5 years experience, mostly commercial.",
  },
  {
    name: "CSS",
    percentage: 85,
    details:
      "Although design may not be my strong suit, I can certainly hold my own with CSS. 4-5 years experience, mostly commercial. Includes the use of preprocessors such as SASS, as well as Flex and CSS Grid more recently.",
  },
  {
    name: "GIT",
    percentage: 90,
    details:
      "Have used GIT both on the command line and through GUIs since the start of my career. Comfortable with most aspects of GIT.",
  },
  {
    name: "Agile",
    percentage: 75,
    details:
      "Experience with the Agile methodology across all previous roles. Experienced with the ceremonies and understand the need for continuous iteration and delivery on a product.",
  },
  {
    name: "TDD",
    percentage: 50,
    details: "A somewhat weak point, but one that is always improving.",
  },
  {
    name: "MySql",
    percentage: 70,
    details:
      "Experience in conjuction with PHP and with Express APIs. Knowledgable to an intermediate level with querying and structuring MySql databases.",
  },
];

export default skills;
