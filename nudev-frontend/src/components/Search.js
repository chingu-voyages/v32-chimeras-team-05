import React, { useState, useEffect } from "react";
import SearchInput from "./SearchInput";
import SearchTags from "./SearchTags";
import { mockData } from "../mockdata/blogPost";
import {
  filterSearchTermHelper,
  filterTagArrayHelper,
} from "../helpers/searchHelpers";

import SearchResults from "./SearchResults";

const Search = () => {
  const [tagArray, setTagArray] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    const resultsSearchTerm = filterSearchTermHelper(mockData, searchTerm);

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
    <div>
      <SearchInput
        placeholderText={"Start by searching here..."}
        buttonText={"Search"}
        handleSearchText={handleSearchText}
        handleSearchBtn={handleSearchBtn}
      />
      <p>{tagArray}</p>

      <SearchTags updateTagArray={updateTagArray} />
      {filteredPosts.map(
        (post) =>
          (post = <SearchResults key={String(post.id.$oid)} post={post} />)
      )}
    </div>
  );
};

export default Search;
