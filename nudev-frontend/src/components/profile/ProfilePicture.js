import React from "react";
import styled from "styled-components";

const ProfilePicture = ({ currentUser, handleDisplayChange }) => {
  //   let photoURL =
  //     "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png";
  //   if (currentUser) {
  //     photoURL = currentUser.photoURL;
  //   }
  const photoURL =
    currentUser && currentUser.photoURL !== null
      ? currentUser.photoURL
      : "https://www.pngitem.com/pimgs/m/30-307416_profile-icon-png-image-free-download-searchpng-employee.png";

  return (
    <ProfilePictureStyled photoURL={photoURL}>
      <div onClick={(e) => handleDisplayChange(e)} className="avatar">
        {/* <img src={photoURL} alt=""></img> */}
        <div class="caption">
          <p>Update Profile</p>
        </div>
      </div>
    </ProfilePictureStyled>
  );
};

const ProfilePictureStyled = styled.div`
  .avatar {
    position: relative;
    display: inline-block;
    cursor: pointer;
    border: solid black;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background: white;
    background-image: url(${(props) => props.photoURL});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    &:hover {
      background: white;
      transform: scale(1.01);
      transition: opacity 0.4s ease-in-out;
      transition: background-color 1s ease-in-out;
      opacity: 80%;
    }
    &:hover .caption {
      opacity: 100%;
    }

    img {
      max-width: 100%;
      height: 100%;

      /* object-fit: contain; */
      display: block;
      /* border-radius: 100%; */

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

export default ProfilePicture;
