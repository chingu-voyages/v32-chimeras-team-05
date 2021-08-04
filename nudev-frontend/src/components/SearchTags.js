import React, { useState } from "react";
import SearchTag from "./SearchTag";
import { Container } from "react-bootstrap";

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
    <Container className="searchTags">
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
    </Container>
  );
};

export default SearchTags;
