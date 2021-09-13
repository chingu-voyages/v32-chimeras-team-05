import Search from "../components/search/Search";
import styled from "styled-components";

const Resources = () => {
  return (
    <ResourcesContainer>
      <Search />
    </ResourcesContainer>
  );
};

const ResourcesContainer = styled.main`
  display: grid;
  align-content: center;
`;
export default Resources;
