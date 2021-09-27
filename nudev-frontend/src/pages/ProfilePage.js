import { useState } from "react";
import styled from "styled-components";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileResources from "../components/profile/profile-resources/ProfileResources";
import ProfileSideNav from "../components/profile/ProfileSideNav";
import ProfileUpdate from "../components/profile/ProfileUpdate";
import { PageMain } from "../styles/SharedStyles";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom";

const profileContent = [
  { id: "123123e3e", title: "Resources" },
  { id: "werwegwef", title: "Update Profile" },
  { id: "gewf23e3r", title: "Bookmarks" },
];

const ProfilePage = () => {
  const { logout } = useAuth();
  const [profileDisplay, setProfileDisplay] = useState("resources");
  const history = useHistory();

  const handleDisplayChange = (e) => {
    const display = e.target.innerHTML.toLowerCase();

    if (display === "logout") {
      logout();
      history.push("/auth");
    }

    console.log(e);
    console.log(display);
    setProfileDisplay(display);
  };

  return (
    <PPMain>
      <ProfileSideNav
        profileContent={profileContent}
        handleDisplayChange={handleDisplayChange}
      />
      <ProfileHeader title="Resources" />

      {profileDisplay === "resources" && <ProfileResources />}
      {profileDisplay === "update profile" && <ProfileUpdate />}
    </PPMain>
  );
};

const PPMain = styled(PageMain)`
  grid-template-areas: "sidenav header" "sidenav content";
  grid-template-rows: min-content auto;
  grid-template-columns: 20em auto;
  padding: 2em 10em;
  min-height: 85vh;
`;

export default ProfilePage;
