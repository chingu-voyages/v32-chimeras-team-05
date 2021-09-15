import { useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileResources from "../components/profile/profile-resources/ProfileResources";
import ProfileSideNav from "../components/profile/ProfileSideNav";
import { useAuth } from "../contexts/AuthContext";
import { PageMain } from "../styles/SharedStyles";
import ProfileBookmarks from "../components/profile/profile-bookmarks/ProfileBookmarks";

const profileNav = [
  { id: "123123e3e", title: "Resources", tabComponent: ProfileResources },
  { id: "gewf23e3r", title: "Bookmarks", tabComponent: ProfileBookmarks },
  { id: "gr24t23fw", title: "Logout" },
];

const ProfilePage = () => {
  const [currentTab, setCurrentTab] = useState("Resources");
  const { currentUser, logout } = useAuth();

  if (!currentUser) return <Redirect to="/auth" />;
  return (
    <PPMain>
      <ProfileSideNav
        profileContent={profileNav}
        setCurrentTab={setCurrentTab}
        currentUser={currentUser}
        logout={logout}
      />
      <ProfileHeader title={currentTab} />
      {currentTab === "Resources" ? <ProfileResources /> : <ProfileBookmarks />}
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
