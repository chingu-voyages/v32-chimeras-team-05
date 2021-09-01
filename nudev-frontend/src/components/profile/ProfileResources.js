import styled from "styled-components";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { colors } from "../../styles/SharedStyles";

const createdResources = [
  { id: 1, title: "How to create a new react app" },
  { id: 2, title: "Getting started with hooks" },
];

const ProfileResources = () => {
  return (
    <PRContainer>
      <PRHeader>Created Resources:</PRHeader>
      <PRList>
        {createdResources.map(({ id, title }) => (
          <PRListItem key={id}>
            {title}
            <PRListIcons>
              <FaEdit />
              <FaTrashAlt />
            </PRListIcons>
          </PRListItem>
        ))}
      </PRList>
      <PRAddButton>Add Resource</PRAddButton>
    </PRContainer>
  );
};

const PRContainer = styled.div`
  display: grid;
  grid-area: content;
  grid-template-rows: 1fr 80% 1fr;
  padding: 2em 3em;
  border: 1px solid ${colors.grey};
`;

const PRHeader = styled.h4``;

const PRList = styled.ul`
  display: grid;
  align-content: baseline;
  grid-gap: 1em;
  padding: 0;
`;

const PRListItem = styled.li`
  display: grid;
  grid-template-columns: auto 5em;
  padding: 1em;
  border: 1px solid ${colors.grey};
`;

const PRListIcons = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-evenly;
`;

const PRAddButton = styled.button`
  justify-self: center;
  padding: 0 1em;
  border-radius: 0.2em;
`;

export default ProfileResources;
