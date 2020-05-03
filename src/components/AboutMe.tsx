import React, { useRef, useEffect } from "react";
import { Image } from "react-bootstrap";
import Fade from "react-reveal/Fade";

import SkillsChart from "./SkillsChart";

const image = require("../images/download (3).png");

type Props = {
  setAboutMeHeight: (e: number) => void;
};

const AboutMe = ({ setAboutMeHeight }: Props) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      console.log(ref.current.clientHeight);
      setAboutMeHeight(ref.current.clientHeight);
    }
  }, [setAboutMeHeight]);

  return (
    <div className="section about" ref={ref}>
      <div id="about" className="anchor" />
      <div className="about__top">
        <div>
          <Fade left>
            <Image
              src={image}
              thumbnail
              roundedCircle
              className="about__picture"
            />
          </Fade>
        </div>
        <Fade right>
          <div className="about__top--details">
            <p className="about__top--name">Sam Fullen</p>
            <p className="about__top--location">
              <i className="fas fa-map-marker-alt" />
              Manchester, UK
            </p>
            <p className="about__top--email">
              <i className="fas fa-envelope-square" />
              <a href="mailto:sam_fullen2@hotmail.co.uk">
                sam_fullen2@hotmail.co.uk
              </a>
            </p>
            <p className="about__top--phone">
              <i className="fas fa-phone" />
              <a href="tel:07816223236">07816223236</a>
            </p>
          </div>
        </Fade>
      </div>
      <p className="about__text">
        A self-driven and motivated JavaScript developer with an emphasis on{" "}
        <strong>React JS</strong>, and with varying levels of experience in{" "}
        <strong>Node/Express/Typescript/AWS,</strong> striving to become an
        all-round full stack developer.
      </p>
      <SkillsChart />
      {/* <p className="about__text">
        Other key skills include:
        <List items={["PHP", "MySql", "HTML/CSS", "SASS", "Lambda", "GIT"]} />
      </p>
      <p className="about__text">
        Used to working in Agile environments. Extremely comfortable in almost
        all aspects of GIT version control, from controlling code flow on the
        command line, to creating and reviewing Pull Requests on GitHub.
      </p>
      <p className="about__text">
        Adaptable to the varying needs of projects and companies, and open to
        trying new technologies if they suit the project more readily than other
        solutions; A big fan of learning on the job.
        <Break double />
        Varying levels of usage with the following AWS services
        <List
          items={[
            "Lambda",
            "S3",
            "Rekognition",
            "EC2",
            "Cognito",
            "API Gateway",
            "SES",
            "CodeBuild",
            "CodePipeline",
          ]}
        />
      </p>
      <p className="about__text">
        Experience with Test Driven Development, as well as other code quality
        tools and techniques such as ESLint, Prop Types or Typescript, Prettier.
      </p> */}
    </div>
  );
};

export default AboutMe;
