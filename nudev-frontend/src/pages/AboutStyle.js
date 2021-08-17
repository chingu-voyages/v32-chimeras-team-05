import styled from "styled-components";
import { colors, PageMain } from "../styles/SharedStyles";

export const AboutMain = styled(PageMain)`
  padding: 0 7em;
  @media only screen and (max-width: 900px) {
    padding: 0 1em;
  }
`;

export const AboutSection = styled.section`
  display: grid;
  grid-column: 1 / 13;
  grid-gap: 3em;
  justify-items: center;
  align-items: center;
  @media only screen and (max-width: 900px) {
    grid-template-columns: 1fr;
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
    width: 40rem;
    border: 1px solid ${colors.grey};
    @media only screen and (max-width: 900px) {
      width: 100%;
    }
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
