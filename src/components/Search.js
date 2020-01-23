/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useState } from "react";

import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult";
// import Pagination from "../components/Pagination";
import Button from "../components/Button";

const Search = () => {
  const [searchResult, setSearchResult] = useState();
  const [startIndex, setStartIndex] = useState(0);

  console.log(startIndex);

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
        <SearchForm setSearchResult={setSearchResult} setStartIndex={setStartIndex} />
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
            {/* <Pagination /> */}
            <Button>Fler Resultat</Button>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Search;
