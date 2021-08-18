import styled from "styled-components";

export const LoginLinksStyle = styled.div`
  height: 100%;
  padding-top: 5px;

  .link {
    text-decoration: none;
    cursor: pointer;
  }
  p {
    text-align: center;
  }
`;

export const LoginLinkStyle = styled.div`
  display: flex;

  align-items: center;
  cursor: pointer;
  background-color: ${(props) => props.color};
  color: white;
  margin: 20px;
  .icon {
    font-size: 20px;
    padding: 5px 0px 7px 10px;
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
