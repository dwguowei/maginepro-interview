import React, {useState} from "react";
import styled from "styled-components";
import Label from "../../components/form/Label";
import Input from "../../components/form/Input";
import Button from "../../components/form/Button";

const SearchBarContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

function Search () {
  const [title, setTitle] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    alert("submit")
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    if(event.currentTarget.name === "title") {
      setTitle(event.currentTarget.value)
    }
  }

  return (
    <>
      <SearchBarContainer onSubmit={(e) => handleSubmit(e)}>
        <Label>Search Movie:</Label>
        <Input name="title" type="text" placeholder="Type the movie title" value={title} onChange={(e) => handleInputChange(e)}/>
        <Button type="submit" disabled={!title}>Search</Button>
      </SearchBarContainer>
    </>
  )
}

export default Search;
