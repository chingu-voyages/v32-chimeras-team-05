import React from "react";
import styled from "styled-components";
import { BiCommentEdit } from "react-icons/bi";
import { colors } from "../../styles/SharedStyles";

const SearchResults = ({ post }) => {
  return (
    <SearchResultsContainer>
      <span>{post.name}</span>
      <span>{post.rating}</span>
      <BiCommentEdit />
    </SearchResultsContainer>
  );
};

const SearchResultsContainer = styled.div`
  display: grid;
  grid-template-columns: 70% 1fr 1fr;
  justify-content: space-evenly;
  align-content: center;
  padding: 1em;
  border: 1px solid ${colors.lightGrey};
`;

export default SearchResults;
