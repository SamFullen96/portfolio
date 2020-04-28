import React, { useRef, useEffect } from "react";

type BreakProps = {
  double?: boolean;
};
const Break = ({ double }: BreakProps) => (
  <>
    <br />
    {double && <br />}
  </>
);

type ListProps = {
  items: Array<string>;
};
const List = ({ items }: ListProps) => {
  return (
    <div className="list">
      {items.map((item: string, index: number) => (
        <>
          {(index + 1) % 2 === 0 ? (
            <span>
              - <strong>{item}</strong>
              <Break />
            </span>
          ) : (
            <span>
              - <strong>{item}</strong>
            </span>
          )}
        </>
      ))}
    </div>
  );
};

type props = {
  setAboutMeHeight: (e: number) => void;
};

const AboutMe = ({ setAboutMeHeight }: props) => {
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
      {/* <h1 className="about__name">Sam Fullen</h1>
    <h2 className="about__subtitle">JavaScript Developer</h2>
    <div className="about__contact-container">
      <span>sam_fullen2@hotmail.co.uk</span>
      <span>07816223236</span>
      <span>Manchester</span>
    </div>
    <hr /> */}
      <p className="about__text">
        A self-driven and motivated JavaScript developer with an emphasis on{" "}
        <strong>React JS</strong>, and with varying levels of experience in{" "}
        <strong>Node/Express/Typescript/AWS,</strong> striving to become an
        all-round full stack developer.
      </p>
      <p className="about__text">
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
      </p>
    </div>
  );
};

export default AboutMe;
