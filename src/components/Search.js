/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useState } from "react";

import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult";
import Button from "../components/Button";
import { searchForBook } from "../api/api";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState();
  const [startIndex, setStartIndex] = useState(0);

  function loadMore() {
    searchForBook(searchTerm, startIndex).then(resp => {
      setSearchResult(prev => {
        return {
          ...prev,
          items: [...prev.items, ...resp.items]
        };
      });
    });
    setStartIndex(prev => prev + 10);
  }

  return (
    <Fragment>
      <div
        css={{
          width: "80vw",
          margin: "0 auto 5vh auto",
          "& button": {
            width: "40vw",
            marginLeft: "auto",
            marginRight: "auto"
          }
        }}
      >
        <SearchForm
          setSearchResult={setSearchResult}
          setStartIndex={setStartIndex}
          setSearchTerm={setSearchTerm}
        />
      </div>
      <div>
        {searchResult && (
          <div
            css={{
              width: "80vw",
              margin: "5vh auto",
              textAlign: "center",
              "& hr": {
                width: "80vw",
                margin: "10vh auto"
              }
            }}
          >
            <SearchResult result={searchResult} />
            <Button onClick={loadMore}>Fler Resultat</Button>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Search;
