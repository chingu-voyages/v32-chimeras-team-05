import styled from "styled-components";

const colors = {
  lightGrey: "rgba(100, 100, 100, 0.5)",
  grey: "rgba(100, 100, 100, 1)",
};

export const SignUpStyle = styled.div`
  /* width: 33vw; */
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* border: solid black; */
    /* min-width: 40vh; */
    input {
      min-width: 500px;
    }
    .text-muted {
      font-size: 20px;
      /* padding: 20px; */
    }
    .form-label {
      font-size: 15px;
    }
    button {
      width: 60%;
      background-color: ${colors.grey};
      border: none;
    }
  }
`;
