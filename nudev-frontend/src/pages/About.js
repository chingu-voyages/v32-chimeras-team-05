import React from "react";
import { Fragment } from "react";
import { about } from "../mockdata/pageContent.json";
import { AboutDescription, AboutMain, AboutSection } from "./AboutStyle";

const About = () => {
  return (
    <AboutMain>
      {about.sections.map((sectionItem, idx) => (
        <Fragment key={idx}>
          <AboutSection col={idx % 2}>
            <AboutDescription>
              <h3>{sectionItem.title}</h3>
              {sectionItem.description.map((sentence, idx) => (
                <p key={`desc-sentence-${idx}`}>{sentence}</p>
              ))}
            </AboutDescription>
          </AboutSection>
          <AboutSection col={(idx + 1) % 2}>
            {sectionItem.image.alt}
          </AboutSection>
        </Fragment>
      ))}
    </AboutMain>
  );
};

export default About;
