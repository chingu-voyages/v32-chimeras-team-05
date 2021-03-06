import styled from "styled-components";

export const colors = {
  lightGrey: "rgba(100, 100, 100, 0.5)",
  grey: "rgba(100, 100, 100, 1)",
};

export const PageMain = styled.main`
  display: grid;
  min-height: 85vh;
`;

export const PRContainer = styled.div`
  display: grid;
  grid-area: content;
  grid-template-rows: 1fr 80% 1fr;
  padding: 2em 3em;
  border: 1px solid ${colors.grey};
`;

export const PRHeader = styled.h4``;

export const PRButton = styled.button`
  justify-self: center;
  padding: 0 1em;
  border-radius: 0.2em;
`;

export const SearchTagButton = styled.button`
  font-size: 0.7rem;
  padding: 0.3rem 1rem;
  border: 1px solid ${colors.lightGrey};
  border-radius: 0.2rem;
`;
