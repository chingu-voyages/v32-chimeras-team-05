import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const SearchInput = ({
  placeholderText,
  buttonText,
  handleSearchText,
  handleSearchBtn,
}) => {
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          onChange={(e) => handleSearchText(e)}
          placeholder={placeholderText}
          aria-label={placeholderText}
          aria-describedby="basic-addon2"
        />
        <Button
          onClick={handleSearchBtn}
          variant="outline-secondary"
          id="button-addon2"
        >
          {buttonText}
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchInput;