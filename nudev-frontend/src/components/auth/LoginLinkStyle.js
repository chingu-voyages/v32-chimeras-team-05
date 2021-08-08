import styled from "styled-components";

export const LoginLinkStyle = styled.div`
  display: flex;
  border: solid black;

  align-items: center;
  cursor: pointer;
  background-color: ${(props) => props.color};
  color: white;
  .icon {
    font-size: 20px;
    padding: 5px 0px 5px 5px;
  }
  .line {
    display: inline-block;
    border-left: 2px solid white;
    margin: 0 10px;
    height: 30px;
  }
  .text {
    font-size: 20px;
    padding: 2px 10px 0px 0px;
  }
`;
