/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";

import { searchForBook } from "../api/api";
import Input from "./Input";
import SubmitButton from "./SubmitButton";

const Search = ({ setSearchResult, setStartIndex }) => {

  const [searchInput, setSearchInput] = useState("");

  function handleSearch(e){
    setSearchInput(e.target.value);
  }

  function bookSearch(e){
    e.preventDefault();
    if(searchInput){
      searchForBook(searchInput).then(resp => {
        setSearchResult(resp);
        setStartIndex(prev => prev + 10);
      })
      setSearchInput("");
    }
  }

  return (
    <form onSubmit={bookSearch} css={{
      display: "flex",
      flexDirection: "column"
    }}>
      <Input type="text" value={searchInput} onChange={handleSearch} placeholder="Sökterm" />
      <SubmitButton text="Sök" />
    </form>
  );
}

export default Search;