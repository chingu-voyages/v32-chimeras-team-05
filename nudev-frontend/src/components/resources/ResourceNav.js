import React from "react";
import { ResourceNavStyled } from "./ResourceNavStyle";

const ResourceNav = () => {
  return (
    <ResourceNavStyled>
      <button>RESOURCES</button>
      <button>COMMENTS</button>
      <button>BOOKMARKS</button>
      <button>LOGOUT</button>
    </ResourceNavStyled>
  );
};

export default ResourceNav;
