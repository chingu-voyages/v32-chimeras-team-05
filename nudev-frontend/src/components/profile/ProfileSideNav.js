import styled from "styled-components";
import ProfilePicture from "./ProfilePicture";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

const ProfileSideNav = ({ profileContent }) => {
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLogout = (e) => {
    const value = e.target.innerHTML;
    if (value === "LOGOUT") {
      logout();
      history.push("/login");
    }
  };

  return (
    <PSNav>
      <PSNProfilePic>
        <ProfilePicture currentUser={currentUser} />
      </PSNProfilePic>
      <PSNavList>
        {profileContent.map(({ id, title }) => (
          <PSNavItem
            key={`psnavitem-${id}`}
            href="#title"
            onClick={title.lowerCase === "logout" ?? (() => handleLogout())}
          >
            {title}
          </PSNavItem>
        ))}
      </PSNavList>
    </PSNav>
  );
};

const PSNProfilePic = styled.div`
  display: grid;
  justify-content: center;
  padding-top: 3em;
  min-height: 30vh;
`;

const PSNav = styled.nav`
  display: grid;
  grid-gap: 1em;
  grid-area: sidenav;
  padding: 4em 2em;
`;

const PSNavList = styled.div`
  display: grid;
  align-content: space-evenly;
`;
const PSNavItem = styled.button`
  padding: 0.5em;
  border-radius: 0.2rem;
  text-transform: uppercase;
`;

export default ProfileSideNav;
