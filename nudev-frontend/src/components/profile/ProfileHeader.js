import styled from "styled-components";

const PHeader = styled.header``;

const PTitle = styled.h3``;

const ProfileHeader = ({ title }) => {
  return (
    <PHeader>
      <PTitle>{title}</PTitle>
    </PHeader>
  );
};

export default ProfileHeader;
