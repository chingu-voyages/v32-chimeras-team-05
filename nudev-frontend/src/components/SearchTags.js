import React, { useState } from "react";
import SearchTag from "./SearchTag";

const SearchTags = ({ updateTagArray }) => {
  const tags = [
    "blogs",
    "tutorials",
    "podcasts",
    "moocs",
    "papers",
    "news",
    "jobs",
    "meetups",
    "Communities",
    "books",
    "newsletters",
    "tools",
    "projects",
    "showcases",
  ];

  return (
    <div>
      {tags.map(
        (tag) =>
          (tag = (
            <SearchTag
              key={tag}
              btnText={tag}
              updateTagArray={updateTagArray}
            />
          ))
      )}
    </div>
  );
};

export default SearchTags;
