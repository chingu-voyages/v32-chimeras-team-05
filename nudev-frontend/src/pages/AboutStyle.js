import styled from "styled-components";
import { colors, PageMain } from "../styles/SharedStyles";

export const AboutMain = styled(PageMain)`
  padding: 0 4em;
`;

export const AboutSection = styled.section`
  display: grid;
  grid-column: ${(props) => (props.col ? "1 / 7" : "7 / 13")};
  padding: 0 3em;
  align-content: space-around;
`;

export const AboutDescription = styled.div`
  font-color: ${colors.grey};
  font-size: 1em;
`;
