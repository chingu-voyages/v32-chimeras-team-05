import styled from "styled-components";

const PHeader = styled.header`
  display: grid;
  grid-area: header;
  justify-content: baseline;
  align-content: flex-end;
  /* padding: 3em; */
`;

const PTitle = styled.h3``;

const ProfileHeader = ({ title }) => {
  return (
    <PHeader>
      <PTitle>{title}</PTitle>
    </PHeader>
  );
};

export default ProfileHeader;
