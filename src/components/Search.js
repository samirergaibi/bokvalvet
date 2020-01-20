import React, { useState } from "react";

import { searchForBook } from "../api/api";

const Search = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState();

  function controlledInput(e){
    setSearchTerm(e.target.value);
  }

  function bookSearch(e){
    e.preventDefault();
    searchForBook(searchTerm).then(resp => {
      setSearchResult(resp);
    })
    console.log("Submitted!");
  }

  return (
    <form onSubmit={bookSearch}>
      <input type="text" value={searchTerm} onChange={controlledInput} placeholder="Sökterm" />
      <button type="submit">Sök</button>
    </form>
  );
}

export default Search;