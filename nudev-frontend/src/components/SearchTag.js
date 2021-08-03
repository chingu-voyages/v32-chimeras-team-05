import React, { useState } from "react";

const SearchTag = ({ btnText, updateTagArray }) => {
  const [toggleTag, setToggleTag] = useState(true);

  const handleTagBtn = () => {
    setToggleTag(!toggleTag);

    updateTagArray(toggleTag, btnText);
  };

  return (
    <div className="searchTag">
      <button
        onClick={handleTagBtn}
        style={
          toggleTag ? { backgroundColor: "white" } : { backgroundColor: "grey" }
        }
      >
        {btnText}
      </button>
    </div>
  );
};

export default SearchTag;
