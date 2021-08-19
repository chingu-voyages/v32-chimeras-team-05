import styled from "styled-components";
import { colors, PageMain } from "../styles/SharedStyles";

export const AboutMain = styled(PageMain)`
  padding: 0 7em;
  grid-row-gap: 3em;
  @media only screen and (max-width: 900px) {
    padding: 0 1em;
  }
`;

export const AboutSection = styled.section`
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

export const AboutSectionHeader = styled.h3`
  margin-bottom: 2rem;
`;

export const AboutImage = styled.div`
  grid-area: ${(props) => "column" + props.col};
  img {
    border: 1px solid ${colors.grey};
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export const AboutDescription = styled.div`
  grid-area: ${(props) => "column" + props.col};
  font-color: ${colors.grey};
  font-size: 1em;
  justify-items: center;
  @media only screen and (max-width: 900px) {
  }
`;
