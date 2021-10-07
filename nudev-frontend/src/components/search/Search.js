import React, { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import SearchTags from "./SearchTags";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";

import {
  filterSearchTermHelper,
  filterTagArrayHelper,
} from "../../helpers/searchHelpers";

import SearchResults from "./SearchResults";
import styled from "styled-components";
import { set } from "react-hook-form";

const Search = () => {
  const resources = useSelector((state) => state.resource);
  console.log("resources", resources);

  const [tagArray, setTagArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([...resources]);

  useEffect(() => {
    setFilteredPosts([...resources]);
    return () => {};
  }, [resources]);

  useEffect(() => {
    const resultsSearchTerm = filterSearchTermHelper(resources, searchTerm);

    if (tagArray.length > 0) {
      const resultsSearchTags = filterTagArrayHelper(
        tagArray,
        resultsSearchTerm
      );
      setFilteredPosts(resultsSearchTags);
    } else {
      setFilteredPosts(resultsSearchTerm);
    }
  }, [searchTerm, tagArray]);

  const updateTagArray = (toggleTag, btnText) => {
    toggleTag
      ? setTagArray((tagArray) => [...tagArray, btnText])
      : setTagArray((tagArray) => tagArray.filter((tag) => tag !== btnText));
    handleSearchBtn();
  };

  const handleSearchText = (e) => {
    setSearchTerm(e.target.value);
    console.log(searchTerm);
  };

  const handleSearchBtn = () => {
    // Could remove btn ?
  };
  return (
    <SearchContainer>
      <SearchInput
        placeholderText={"Start by searching here..."}
        buttonText={"Search"}
        handleSearchText={handleSearchText}
        handleSearchBtn={handleSearchBtn}
      />

      <SearchTags updateTagArray={updateTagArray} />
      <ResultsList>
        {filteredPosts &&
          filteredPosts.map(
            (post) =>
              (post = <SearchResults key={String(post.id)} post={post} />)
          )}
      </ResultsList>
    </SearchContainer>
  );
};

const SearchContainer = styled(Container)`
  padding: 2em 0;
`;
const ResultsList = styled.div`
  display: grid;
  grid-gap: 1em;
  height: 65vh;
  align-content: flex-start;
  /* overflow-y: hidden; */
`;

export default Search;
