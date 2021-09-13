import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { SearchInputStyled } from "./SearchInputStyle";

const SearchInput = ({
  placeholderText,
  buttonText,
  handleSearchText,
  handleSearchBtn,
}) => {
  return (
    <SearchInputStyled>
      <InputGroup className=" mb-3">
        <FormControl
          className="search-input"
          onChange={(e) => handleSearchText(e)}
          placeholder={placeholderText}
          aria-label={placeholderText}
          aria-describedby="basic-addon2"
        />
      </InputGroup>
    </SearchInputStyled>
  );
};

export default SearchInput;
