import styled from "styled-components";

const colors = {
  lightGrey: "rgba(100, 100, 100, 0.5)",
  grey: "rgba(100, 100, 100, 1)",
};

export const SearchInputStyled = styled.div`
  .search-input {
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
  }
`;
