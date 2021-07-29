import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const SearchInput = () => {
  return (
    <div>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Start by searching here..."
          aria-label="Start by searching here..."
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Button
        </Button>
      </InputGroup>
    </div>
  );
};

export default SearchInput;
