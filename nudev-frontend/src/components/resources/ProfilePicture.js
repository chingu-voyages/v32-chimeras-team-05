import React from "react";
import { ProfilePictureStyled } from "./ProfilePictureStyle";

const ProfilePicture = () => {
  return (
    <ProfilePictureStyled>
      <div className="avatar">
        <img
          src="https://img.discogs.com/1WNYfNjQ8rLowx-SUZYiLv0RfEU=/fit-in/300x300/filters:strip_icc():format(jpeg):mode_rgb():quality(40)/discogs-images/A-5049380-1599682542-2398.jpeg.jpg"
          alt=""
        ></img>
        <div class="caption">
          <p>Update Profile</p>
        </div>
      </div>
    </ProfilePictureStyled>
  );
};

export default ProfilePicture;
