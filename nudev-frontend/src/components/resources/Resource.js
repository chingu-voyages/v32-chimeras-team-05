import styled from "styled-components";
import { useHistory, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  colors,
  PageMain,
  PRButton,
  PRHeader,
  SearchTagButton,
} from "../../styles/SharedStyles";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { useAuth } from "../../contexts/AuthContext";
import { useDispatch } from "react-redux";

import { deleteResource } from "../../redux/reducers/resourceReducer";
import { FaTrashAlt } from "react-icons/fa";

const Resource = () => {
  const { id } = useParams();
  const { currentUser } = useAuth();
  let history = useHistory();
  const dispatch = useDispatch();
  const resources = useSelector((state) => state.resource);
  const resource = resources.find((resource) => resource.id === id);

  const handleDelete = (e) => {
    // const id = e.currentTarget.parentNode.id;

    dispatch(deleteResource(id));
  };

  if (!resource)
    return (
      <RContainer>
        <PRHeader>The resource does not exist</PRHeader>
        <PRButton onClick={() => history.push("/resources")}>Go back</PRButton>
      </RContainer>
    );
  return (
    <PageMain>
      <RContainer>
        <PRHeader>{resource.name}</PRHeader>
        <RDetails>
          <FaRegBookmark />
          <FaBookmark />
          <p>{resource.description}</p>
          {resource.tags.length > 0 && (
            <RTags>
              {resource.tags.map((tag, idx) => (
                <SearchTagButton key={`tag-button-${idx}`}>
                  {tag}
                </SearchTagButton>
              ))}
            </RTags>
          )}
        </RDetails>
        <PRButton onClick={() => history.push("/resources")}>Go back</PRButton>
        <div className="btn-delete">
          <FaTrashAlt
            id={resource.id}
            onClick={(e) => {
              handleDelete(e);
            }}
          />
        </div>
      </RContainer>
    </PageMain>
  );
};

const RContainer = styled.section`
  display: grid;
  padding: 10em;
  margin: 10em 20em;
  border: 1px solid ${colors.grey};
`;

const RDetails = styled.div`
  display: grid;
`;

const RTags = styled.div`
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  grid-gap: 1em;
`;

export default Resource;
