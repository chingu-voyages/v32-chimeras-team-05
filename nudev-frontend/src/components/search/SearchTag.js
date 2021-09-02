import React, { useState } from "react";
import styled from "styled-components";
import { colors } from "../../styles/SharedStyles";

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

const SearchTagButton = styled.button`
  padding: 0.3rem 1rem;
  border: 1px solid ${colors.lightGrey};
  border-radius: 0.2rem;
`;

export default SearchTag;
