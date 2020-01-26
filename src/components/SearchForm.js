/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";

import { searchForBook } from "../api/api";
import Input from "./Input";
import PrimaryButton from "./PrimaryButton";

const Search = ({ setSearchResult, setStartIndex, setSearchTerm, amountToLoad }) => {
  const [searchInput, setSearchInput] = useState("");

  function handleSearch(e) {
    setSearchInput(e.target.value);
  }

  function bookSearch(e) {
    e.preventDefault();
    if (searchInput) {
      searchForBook(searchInput, 0, amountToLoad).then(resp => {
        setSearchResult(resp);
        setStartIndex(amountToLoad);
      });
      setSearchInput("");
      setSearchTerm(searchInput);
    }
  }

  return (
    <form
      onSubmit={bookSearch}
      css={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <Input
        type="text"
        value={searchInput}
        onChange={handleSearch}
        placeholder="Sökterm"
      />
      <PrimaryButton type="submit">Sök</PrimaryButton>
    </form>
  );
};

export default Search;
