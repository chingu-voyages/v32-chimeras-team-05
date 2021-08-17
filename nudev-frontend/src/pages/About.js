import React from "react";
import { pages } from "../mockdata/pageContent";
import {
  AboutDescription,
  AboutMain,
  AboutSection,
  AboutSectionHeader,
  AboutImage,
} from "./AboutStyle";

const About = () => {
  const { about } = pages;
  return (
    <AboutMain>
      {about.sections.map((sectionItem, idx) => (
        <AboutSection key={idx}>
          <AboutDescription col={idx % 2}>
            <AboutSectionHeader>{sectionItem.title}</AboutSectionHeader>
            {sectionItem.description.map((sentence, idx) => (
              <p key={`desc-sentence-${idx}`}>{sentence}</p>
            ))}
          </AboutDescription>
          <AboutImage col={(idx + 1) % 2}>
            <img src={sectionItem.image.src} alt={sectionItem.image.alt} />
          </AboutImage>
        </AboutSection>
      ))}
    </AboutMain>
  );
};

export default About;
