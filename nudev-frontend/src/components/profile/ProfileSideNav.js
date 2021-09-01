import styled from "styled-components";

const ProfileSideNav = ({ profileContent }) => {
  return (
    <PSNav>
      <PSNProfilePic />
      <PSNavList>
        {profileContent.map(({ id, title }) => (
          <PSNavItem key={`psnavitem-${id}`} href="#title">
            {title}
          </PSNavItem>
        ))}
      </PSNavList>
    </PSNav>
  );
};

const PSNProfilePic = styled.div`
  padding: 3em 0;
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
