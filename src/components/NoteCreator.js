/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useContext } from "react";

import addNote from "../database/addNote";
import updateNote from "../database/updateNote";
import PrimaryButton from "./PrimaryButton";
import { FirebaseContext } from "./Firebase";
import mq from "../utils/mediaQueries";

const NoteCreator = ({ bookId, editingValue, setEditingValue, setNote }) => {
  const { user } = useContext(FirebaseContext);
  const [noteInput, setNoteInput] = useState(editingValue ? editingValue.note : "");
  function add(e) {
    e.preventDefault();
    addNote(user.uid, bookId, noteInput);
    setNoteInput("");
  }
  function update(e) {
    e.preventDefault();
    if (noteInput === editingValue.note) {
      setNote(editingValue);
    } else {
      updateNote(user.uid, bookId, noteInput);
      setEditingValue(null);
      setNoteInput("");
    }
  }
  return (
    <div>
      <form onSubmit={editingValue ? update : add}>
        <textarea
          value={noteInput}
          onChange={e => {
            setNoteInput(e.target.value);
          }}
          maxLength="1500"
          css={{
            display: "block",
            width: "80%",
            height: "20vh",
            margin: "5vh auto",
            [mq[0]]: {
              width: "50%",
              height: "15vh"
            },
            [mq[3]]: {
              width: "35%",
              height: "25vh"
            }
          }}
        ></textarea>
        <PrimaryButton type="submit" css={{ margin: "0 auto 20px auto" }}>
          Spara
        </PrimaryButton>
        {
          editingValue &&
          <button css={{
            backgroundColor: "#767676",
            fontSize: "16px",
            border: "none",
            padding: "11px 26px",
            color: "#fff",
            fontWeight: 600,
            letterSpacing: "1px",
            outline: "none",
            margin: "0 10px",
            cursor: "pointer",
            borderRadius: "10px",
            transition: "all 0.3s ease 0s",
            boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
            ":hover": {
              backgroundColor: "#999999"
            },
          }}>Avbryt</button>
        }
      </form>
    </div>
  );
};

export default NoteCreator;
