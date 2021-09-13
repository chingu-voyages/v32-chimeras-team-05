import { useState } from "react";
import styled from "styled-components";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import {
  colors,
  PRContainer,
  PRHeader,
  PRButton,
} from "../../../styles/SharedStyles";
import ResourceModal from "./ResourceModal";

const ProfileResources = () => {
  const [showResourceModal, setShowResourceModal] = useState(false);
  const [resourceList, setResourceList] = useState([
    { id: 1, title: "How to create a new react app" },
    { id: 2, title: "Getting started with hooks" },
  ]);

  const addResource = (resource) => {
    const newResourceList = [
      ...resourceList,
      {
        id: resourceList.length + 1,
        ...resource,
      },
    ];
    setResourceList(newResourceList);
  };

  const editResource = (resource) => {
    let newResourceList = [...resourceList];
    let resourceItem = newResourceList.find((item) => item.id === resource.id);
    resourceItem = { id: resource.id, ...resource };
    setResourceList(newResourceList);
  };

  const deleteResource = (resource) => {
    const newResourceList = [...resourceList];
    newResourceList.splice(resource);
  };

  const handleClose = () => setShowResourceModal(false);
  const handleShow = () => setShowResourceModal(true);

  return (
    <PRContainer>
      <PRHeader>Created Resources:</PRHeader>
      <PRList>
        {resourceList.map(({ id, title }) => (
          <PRListItem key={id}>
            {title}
            <PRListIcons>
              <FaEdit onClick={handleShow} actionType={editResource} />
              <FaTrashAlt />
            </PRListIcons>
          </PRListItem>
        ))}
      </PRList>
      <PRButton onClick={handleShow}>Add Resource</PRButton>
      <ResourceModal
        show={showResourceModal}
        handleClose={handleClose}
        actionType={addResource}
      />
    </PRContainer>
  );
};

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

export default ProfileResources;
