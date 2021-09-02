import React from "react";
import { pages } from "../mockdata/pageContent";
import styled from "styled-components";
import { colors, PageMain } from "../styles/SharedStyles";

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

const AboutMain = styled(PageMain)`
  padding: 0 7em;
  grid-row-gap: 3em;
  max-height: 100%;
  @media only screen and (max-width: 900px) {
    padding: 0 1em;
  }
`;

const AboutSection = styled.section`
  display: grid;
  grid-column: 1 / 13;
  justify-items: center;
  align-items: center;
  grid-gap: 3em;
  @media only screen and (max-width: 900px) {
    grid-column: 1 / 13;
    grid-template-areas: "column0" "column1";
  }
  @media only screen and (min-width: 900px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas: "column0 column1";
  }
`;

const AboutSectionHeader = styled.h3`
  margin-bottom: 2rem;
`;

const AboutImage = styled.div`
  grid-area: ${(props) => "column" + props.col};
  img {
    border: 1px solid ${colors.grey};
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

const AboutDescription = styled.div`
  grid-area: ${(props) => "column" + props.col};
  color: ${colors.grey};
  font-size: 1em;
  justify-items: center;
  @media only screen and (max-width: 900px) {
  }
`;

export default About;
