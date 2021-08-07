import styled from "styled-components";

const colors = {
  lightGrey: "rgba(100, 100, 100, 0.5)",
  grey: "rgba(100, 100, 100, 1)",
};

export const LandingMain = styled.main`
  display: grid;
  justify-content: center;
  align-content: center;
  min-height: 85vh;
`;

export const LandingHeadline = styled.section`
  display: grid;
  align-content: space-between;
  grid-gap: 2em;
  padding: 2em;
  width: 100vw;
  text-align: center;
  h1 {
    font-size: 2em;
  }
  h3 {
    font-size: 1.5em;
    color: ${colors.grey};
  }
`;

export const LandingSearch = styled.input`
  justify-self: center;
  width: 80%;
  height: 2.5em;
  padding: 0 2em;
  border-radius: 1em;
  border: 1px solid ${colors.lightGrey};

  &:focus {
    outline: none;
    border: 1px solid ${colors.grey};
  }
`;
