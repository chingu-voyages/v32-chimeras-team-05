import SearchTag from "./SearchTag";
import styled from "styled-components";

const SearchTags = ({ updateTagArray }) => {
  const tags = [
    "blogs",
    "tutorials",
    "podcasts",
    "moocs",
    "papers",
    "news",
    "jobs",
    "meetups",
    "Communities",
    "books",
    "newsletters",
    "tools",
    "projects",
    "showcases",
  ];

  return (
    <SearchTagsContainer>
      {tags.map(
        (tag) =>
          (tag = (
            <SearchTag
              key={tag}
              btnText={tag}
              updateTagArray={updateTagArray}
            />
          ))
      )}
    </SearchTagsContainer>
  );
};

const SearchTagsContainer = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(8, 1fr);
  justify-content: space-evenly;
  padding: 1em 3em;
`;
export default SearchTags;
