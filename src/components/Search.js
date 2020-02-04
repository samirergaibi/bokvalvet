/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Fragment, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult";
import { searchForBook } from "../api/api";
import mq from "../utils/mediaQueries";
import PrimaryButton from "./PrimaryButton";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState();
  const [startIndex, setStartIndex] = useState(0);
  const amountToLoad = 9;

  useEffect(() => {
    if (window && localStorage.getItem("last-search") !== null) {
      const { searchString, searchIndex, resp } = JSON.parse(
        localStorage.getItem("last-search")
      );
      setSearchResult(resp);
      setSearchTerm(searchString);
      setStartIndex(searchIndex);
    }
  }, []);

  function clearHistory() {
    localStorage.clear();
    setSearchResult(null);
  }

  function loadMore() {
    searchForBook(searchTerm, startIndex, amountToLoad).then(resp => {
      let previousAndNewResults;
      setSearchResult(prev => {
        previousAndNewResults = {
          ...prev,
          items: [...prev.items, ...resp.items]
        };
        return previousAndNewResults;
      });
      if (window) {
        localStorage.setItem(
          "last-search",
          JSON.stringify({
            searchString: searchTerm,
            searchIndex: startIndex + amountToLoad,
            resp: previousAndNewResults
          })
        );
      }
    });
    setStartIndex(prev => prev + amountToLoad);
  }
  return (
    <Fragment>
      <div
        css={{
          width: "80vw",
          margin: "0 auto 5vh auto",
          [mq[2]]: {
            width: "30vw"
          }
        }}
      >
        <div
          css={{
            "& button": {
              width: "40vw",
              marginLeft: "auto",
              marginRight: "auto",
              [mq[2]]: {
                width: "10vw"
              }
            }
          }}
        >
          <SearchForm
            setSearchResult={setSearchResult}
            setStartIndex={setStartIndex}
            setSearchTerm={setSearchTerm}
            amountToLoad={amountToLoad}
          />
        </div>
        {searchTerm && searchResult && (
          <div
            css={{
              textAlign: "center",
              fontSize: "14px",
              marginTop: "8px"
            }}
          >
            <p>
              "{searchTerm}" genererade {searchResult.totalItems} resultat.
            </p>
            <p>
              Hittar du inte din bok? Sök på{" "}
              <a
                href={`https://www.google.com/search?q=${searchTerm.split(" ").join("+")}+bok+engelska`}
                rel="noopener noreferrer"
                target="_blank"
                css={{
                  color: "#1a73e8",
                  textDecoration: "none",
                  ":hover": {
                    textDecoration: "underline"
                  }
                }}
              >
               bokens engelska namn.
              </a>
            </p>
          </div>
        )}
        {searchResult && searchResult.totalItems > 0 && (
          <button
            onClick={clearHistory}
            css={{
              backgroundColor: "transparent",
              fontFamily: "'Raleway'",
              outline: "none",
              border: "none",
              fontSize: "12px",
              cursor: "pointer",
              width: "100%",
              margin: "0 auto",
              "& svg": {
                marginRight: "3px"
              },
              ":hover": {
                textDecoration: "underline"
              }
            }}
          >
            <FontAwesomeIcon icon={["far", "trash-alt"]} />
            Rensa sökresultat
          </button>
        )}
      </div>
      <div>
        {searchResult && searchResult.totalItems > 0 && (
          <div
            css={{
              width: "80vw",
              margin: "5vh auto",
              textAlign: "center",
              [mq[2]]: {
                width: "90vw"
              },
              [mq[3]]: {
                width: "80vw"
              }
            }}
          >
            <SearchResult result={searchResult} />
            <div
              css={{
                "& button": {
                  marginTop: 0,
                  [mq[2]]: {
                    marginTop: "10vh"
                  }
                }
              }}
            >
              <PrimaryButton onClick={loadMore}>Ladda fler</PrimaryButton>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Search;
