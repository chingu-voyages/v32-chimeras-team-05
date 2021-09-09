import styled from "styled-components";

const colors = {
  lightGrey: "rgba(100, 100, 100, 0.5)",
  grey: "rgba(100, 100, 100, 1)",
};

export const SignUpStyle = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
  form {
    display: grid;
    justify-content: center;
    align-items: center;
    /* border: solid black; */
    /* min-width: 40vh; */
    input {
      min-width: 500px;
    }
    .form-label {
      font-size: 15px;
    }
    button {
      justify-self: stretch;
      background-color: ${colors.grey};
      border: none;
    }
  }
`;
