import React from "react";
import { ResourceNavStyled } from "./ResourceNavStyle";

const ResourceNav = ({ handleClick }) => {
  return (
    <ResourceNavStyled>
      <button>RESOURCES</button>
      <button>COMMENTS</button>
      <button>BOOKMARKS</button>
      <button onClick={(e) => handleClick(e)}>LOGOUT</button>
    </ResourceNavStyled>
  );
};

export default ResourceNav;
