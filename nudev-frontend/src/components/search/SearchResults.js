import React, { useState } from "react";
import styled from "styled-components";
import { BiCommentEdit } from "react-icons/bi";
import { colors } from "../../styles/SharedStyles";

const SearchResults = ({ post }) => {
  const [resultOpen, setResultOpen] = useState(false);

  const handleClick = () => {
    setResultOpen(!resultOpen);
  };
  return (
    <>
      {!resultOpen ? (
        <SearchResultsContainer onClick={handleClick}>
          <span>{post.name}</span>
          <div className="container">
            <span>{post.level}</span>
            <span className="icon">
              <BiCommentEdit />
            </span>
          </div>
        </SearchResultsContainer>
      ) : (
        <SearchResultsContainer onClick={handleClick}>
          <span>{post.name}</span>
          <div className="container">
            <span>{post.level}</span>

            <span className="icon">
              <BiCommentEdit />
            </span>
          </div>
          <p>{post.description}</p>
          <div className="container">
            <a href={post.link}>Link</a>
          </div>
        </SearchResultsContainer>
      )}
    </>
  );
};

const SearchResultsContainer = styled.div`
  display: grid;
  grid-template-columns: 80% 10rem;
  justify-content: space-evenly;
  align-content: center;
  padding: 1em;
  border: 1px solid ${colors.lightGrey};
  cursor: pointer;

  row-gap: 1em;

  .container {
    display: flex;
    justify-content: space-between;
  }
`;

const SearchResultsContainerOpen = styled.div`
  display: grid;
  grid-template-columns: 80% 8rem;
  justify-content: space-evenly;
  align-content: center;
  padding: 1em;
  border: 1px solid ${colors.lightGrey};

  .container {
    display: flex;
    justify-content: space-between;
  }
`;

export default SearchResults;
