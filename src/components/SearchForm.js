/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";

import { searchForBook } from "../api/api";
import Input from "./Input";
import PrimaryButton from "./PrimaryButton";

const Search = ({
  setSearchResult,
  setStartIndex,
  setSearchTerm,
  amountToLoad,
}) => {
  const [searchInput, setSearchInput] = useState("");

  function handleSearch(e) {
    setSearchInput(e.target.value);
  }

  function bookSearch(e) {
    e.preventDefault();
    if (searchInput) {
      searchForBook(searchInput, 0, amountToLoad).then((resp) => {
        // image urls from Google Books API return a http url, so we convert it to https
        resp.items.forEach(book => {
          const images = book?.volumeInfo?.imageLinks;
          if (images) {
            for (let key in images) {
              images[key] = images[key].replace(/^http:/, "https:");
            }
          }
        });
        setSearchResult(resp);
        if (window) {
          localStorage.setItem(
            "last-search",
            JSON.stringify({
              searchString: searchInput,
              searchIndex: amountToLoad,
              resp,
            })
          );
        }
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
        flexDirection: "column",
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
