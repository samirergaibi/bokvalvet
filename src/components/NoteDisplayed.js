/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useState } from "react";

import dateToString from "../utils/dateToString";
import ConfirmPopup from "./ConfirmPopup";
import deleteNote from "../database/deleteNote";
import mq from "../utils/mediaQueries";

const NoteDisplayed = ({ note, editNote, setNoteVisible, bookRef }) => {
  const [visible, setVisible] = useState(false);
  return (
    <Fragment>
      <ConfirmPopup
        visible={visible}
        setVisible={setVisible}
        deleteFunc={() => {
          deleteNote(note.note_id);
          setNoteVisible(false);
        }}
        msg="Är du säker på att du vill ta bort din notering?"
      />
      <div
        css={{
          position: "relative",
          width: "90%",
          boxShadow:
            "0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 6px 8px rgba(0,0,0,0.11), 0 8px 16px rgba(0,0,0,0.11)",
          padding: "40px 15px 20px 15px",
          margin: "20px auto",
          borderRadius: "10px",
          letterSpacing: "1px",
          lineHeight: "1.6",
          [mq[0]]: {
            width: "50%"
          },
          [mq[3]]: {
            width: "35%",
            padding: "40px 40px 20px 40px"
          }
        }}
      >
        <time css={{ position: "absolute", top: "10px", right: "10px", fontSize: "13px", fontStyle: "italic" }}>
          {dateToString(note.date.toDate())}
        </time>
        <p>{note.note}</p>
        <div
          css={{
            display: "flex",
            justifyContent: "space-between",
            margin: "40px auto 0 auto",
            "& button": {
              border: "none",
              outline: "none",
              backgroundColor: "transparent",
              fontSize: "13px",
              fontFamily: "'Raleway'",
              padding: "0 20px",
              cursor: "pointer"
            },
            "& svg": {
              marginRight: "5px"
            }
          }}
        >
          <button
            onClick={() => {
              setVisible(prev => !prev);
            }}
          >
            <FontAwesomeIcon icon={["far", "trash-alt"]} />
            Ta bort
          </button>
          <button onClick={() => { editNote(); bookRef.current.scrollIntoView(); }}>
            <FontAwesomeIcon icon={["far", "edit"]} />
            Redigera
          </button>
        </div>
      </div>
    </Fragment>
  );
};

export default NoteDisplayed;
