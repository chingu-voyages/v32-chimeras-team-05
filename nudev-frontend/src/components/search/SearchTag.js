import React, { useState } from "react";
import styled from "styled-components";
import { colors, SearchTagButton } from "../../styles/SharedStyles";

const SearchTag = ({ btnText, updateTagArray }) => {
  const [toggleTag, setToggleTag] = useState(true);

  const handleTagBtn = () => {
    setToggleTag(!toggleTag);

    updateTagArray(toggleTag, btnText);
  };

  return (
    <SearchTagButton
      onClick={handleTagBtn}
      style={
        toggleTag ? { backgroundColor: "white" } : { backgroundColor: "grey" }
      }
    >
      {btnText}
    </SearchTagButton>
  );
};

export default SearchTag;
