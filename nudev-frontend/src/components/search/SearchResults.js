import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BiCommentEdit } from "react-icons/bi";
import { colors } from "../../styles/SharedStyles";

const SearchResults = ({ post }) => {
  return (
    <SearchResultsContainer>
      <ResultTitle to={`/resource/${post.id}`}>{post.name}</ResultTitle>
      <ResultButtons>
        <span>{post.rating}</span>
        {/* <span>Hello</span> */}
        <BiCommentEdit />
      </ResultButtons>
    </SearchResultsContainer>
  );
};

const SearchResultsContainer = styled.div`
  display: grid;
  grid-template-columns: 8fr 1fr;
  justify-content: space-between;
  align-content: center;
  padding: 1em;
  border: 1px solid ${colors.lightGrey};
`;

const ResultTitle = styled(Link)`
  font-weight: 400;
  font-size: 1em;
  text-decoration: none;
  color: inherit;
`;

const ResultButtons = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 1em;
  justify-content: space-evenly;
`;

export default SearchResults;
