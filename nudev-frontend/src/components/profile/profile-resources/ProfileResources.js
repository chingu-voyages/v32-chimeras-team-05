import { useState, useEffect } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useAuth } from "../../../contexts/AuthContext";

import {
  createResource,
  deleteResource,
  editResource,
} from "../../../redux/reducers/resourceReducer";

import { FaEdit, FaTrashAlt } from "react-icons/fa";
import {
  colors,
  PRContainer,
  PRHeader,
  PRButton,
} from "../../../styles/SharedStyles";
import ResourceModal from "./ResourceModal";
import { Link } from "react-router-dom";

const ProfileResources = () => {
  const { currentUser } = useAuth();
  const userUID = { userId: currentUser.uid };
  console.log("current user is @@@", currentUser.uid);
  const [showResourceModal, setShowResourceModal] = useState(false);
  const resourceList = useSelector((state) => state.resource);

  console.log(resourceList);

  const dispatch = useDispatch();

  const addResource = (resource) => {
    const newResource = { ...resource, ...userUID };
    dispatch(createResource(newResource));
  };

  const editResource = (resource) => {
    let newResourceList = [...resourceList];
    console.log("new resourcelist", newResourceList);
    let resourceItem = newResourceList.find((item) => item.id === resource.id);
    resourceItem = { id: resource.id, ...resource };
    // setResourceList(newResourceList);
  };

  const handleDelete = (e) => {
    const id = e.currentTarget.parentNode.id;

    dispatch(deleteResource(id));
  };

  const handleClose = () => setShowResourceModal(false);
  const handleShow = () => setShowResourceModal(true);

  return (
    <PRContainer>
      <PRHeader>Created Resources:</PRHeader>
      {resourceList.filter((resource) => resource.userId === currentUser.uid)
        .length > 0 ? (
        <PRList>
          {resourceList
            .filter((resource) => resource.userId === currentUser.uid)
            .map((resource) => (
              <PRListItem
                key={resource.id}
                as={Link}
                to={`/resource/${resource.id}`}
              >
                {resource.name}
                <PRListIcons id={resource.id}>
                  {/* <FaEdit
                    id={resource.id}
                    resource={resource}
                    onClick={handleShow}
                    actionType={editResource}
                  /> */}
                  <FaTrashAlt
                    id={resource.id}
                    onClick={(e) => {
                      handleDelete(e);
                    }}
                  />
                </PRListIcons>
              </PRListItem>
            ))}
        </PRList>
      ) : (
        <PRNoResources>
          <h5>No Resources Created by User</h5>
          <p>Click the Add Resource button below to create some resources</p>
        </PRNoResources>
      )}

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

const PRNoResources = styled.section`
  display: grid;
  align-content: baseline;
  grid-gap: 1em;
  padding: 1em 0;
  & h5 {
    font-weight: 400;
  }
`;

const PRListItem = styled.li`
  display: grid;
  grid-template-columns: auto 5em;
  padding: 1em;
  border: 1px solid ${colors.grey};
  text-decoration: none;
  color: ${colors.grey};
`;

const PRListIcons = styled.span`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-evenly;
`;

export default ProfileResources;
