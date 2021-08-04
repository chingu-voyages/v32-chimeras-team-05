import React from "react";
import { BiCommentEdit } from "react-icons/bi";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const SearchResults = ({ post }) => {
  // console.log("post", post);
  return (
    <div className="searchResults">
      <p className="searchResults__name">{post.name}</p>
      <p className="searchResults__rating">{post.rating}</p>
      <BiCommentEdit className="searchResults__comment" />
    </div>
  );
};

export default SearchResults;
