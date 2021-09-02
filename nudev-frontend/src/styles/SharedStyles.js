import styled from "styled-components";

export const colors = {
  lightGrey: "rgba(100, 100, 100, 0.5)",
  grey: "rgba(100, 100, 100, 1)",
};

export const PageMain = styled.main`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  min-height: 85vh;
`;
