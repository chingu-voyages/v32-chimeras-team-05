import React, { useState } from "react";

const SearchTag = ({ btnText, updateTagArray }) => {
  const [toggleTag, setToggleTag] = useState(false);

  const handleTagBtn = () => {
    setToggleTag(!toggleTag);
    updateTagArray(toggleTag, btnText);
  };

  return (
    <div>
      <button
        onClick={handleTagBtn}
        style={
          toggleTag ? { backgroundColor: "grey" } : { backgroundColor: "white" }
        }
      >
        {btnText}
      </button>
    </div>
  );
};

export default SearchTag;
