import React, { useState } from "react";
import SearchInput from "./SearchInput";
import SearchTags from "./SearchTags";

const Search = () => {
  const updateTagArray = (toggleTag, btnText) => {};
  return (
    <div>
      <SearchInput
        placeholderText={"Start by searching here..."}
        buttonText={"Search"}
      />
      <SearchTags updateTagArray={updateTagArray} />
    </div>
  );
};

export default Search;
