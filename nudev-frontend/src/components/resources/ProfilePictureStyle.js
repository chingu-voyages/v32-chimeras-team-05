import styled from "styled-components";

export const ProfilePictureStyled = styled.div`
  .avatar {
    position: relative;
    display: inline-block;
    cursor: pointer;
    /* border: solid black; */
    width: 200px;
    height: 200px;
    &:hover img {
      transform: scale(1.1);
      transition: opacity 0.4s ease-in-out;
      opacity: 50%;
    }
    &:hover .caption {
      opacity: 100%;
    }

    img {
      display: block;
      border-radius: 100%;
      max-width: 100%;

      opacity: 100%;

      transition: transform 1s;
      /* &:hover {
        opacity: 30%;
      } */
    }

    .caption {
      width: 100%;
      height: 100%;
      font-size: 30px;

      position: absolute;
      top: 65%;
      left: 50%;
      transform: translate(-50%, -50%);
      text-align: center;
      color: black;
      /* font-weight: bold; */
      /* border: solid black; */
      opacity: 0%;
      p {
        margin-top: 20px;
      }
      /* &:hover {
        opacity: 100%;
      } */
    }
  }
`;
