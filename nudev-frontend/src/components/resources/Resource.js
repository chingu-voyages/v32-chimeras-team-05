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

const Resource = () => {
  const { id } = useParams();
  let history = useHistory();
  const resources = useSelector((state) => state.resource);
  const resource = resources.find((resource) => resource.id === id);
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
