import styled from "styled-components";

const ResourceNavStyled = styled.div`
  display: flex;
  flex-direction: column;
  button {
    width: 200px;
    margin: 5px;
    &:hover {
      background-color: lightcoral;
    }
  }
`;

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
