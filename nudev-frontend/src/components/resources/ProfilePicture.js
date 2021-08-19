import React from "react";
import { ProfilePictureStyled } from "./ProfilePictureStyle";

const ProfilePicture = ({ currentUser }) => {
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
      <div className="avatar">
        {/* <img src={photoURL} alt=""></img> */}
        <div class="caption">
          <p>Update Profile</p>
        </div>
      </div>
    </ProfilePictureStyled>
  );
};

export default ProfilePicture;
