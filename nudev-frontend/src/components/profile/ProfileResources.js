import styled from "styled-components";

const PRContainer = styled.div`
  grid-area: "content";
  padding: 1em;
`;

const PRHeader = styled.h4``;

const ProfileResources = () => {
  return (
    <PRContainer>
      <PRHeader>Created Resources</PRHeader>
    </PRContainer>
  );
};

export default ProfileResources;
