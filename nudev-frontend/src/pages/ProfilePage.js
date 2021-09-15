import styled from "styled-components";
import ProfileHeader from "../components/profile/ProfileHeader";
import ProfileResources from "../components/profile/profile-resources/ProfileResources";
import ProfileSideNav from "../components/profile/ProfileSideNav";
import ProfileUpdate from "../components/profile/ProfileUpdate";
import { PageMain } from "../styles/SharedStyles";

const profileContent = [
  { id: "123123e3e", title: "Resources" },
  { id: "werwegwef", title: "Comments" },
  { id: "gewf23e3r", title: "Bookmarks" },
  { id: "gr24t23fw", title: "Logout" },
];

const ProfilePage = () => {
  return (
    <PPMain>
      <ProfileSideNav profileContent={profileContent} />
      <ProfileHeader title="Resources" />
      <ProfileUpdate />
      <ProfileResources />
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
