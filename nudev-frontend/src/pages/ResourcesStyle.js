import styled from "styled-components";

export const ResourcesStyle = styled.div`
  /* width: 100vw;
  height: 80vh;
  display: grid;
  justify-content: center;
  align-items: center;
  border: solid black; */
  .sideSection {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    border: solid yellow;
  }
  .container {
    /* width: 100vw;
    height: 80vh;
    border: solid red; */

    .avatar {
      max-width: 100px;
      border-radius: 100%;
    }
  }
  .resourceContainer {
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 80vh;
    border: solid yellow;
    border: solid black;
  }
`;

export const AuthContainer = styled.div`
  padding: 20px;
  border: solid thin black;
`;

// export const AuthSignUp = styled.div`
//   width: 500px;
// `;
