/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useContext } from "react";

import addNote from "../database/addNote";
import updateNote from "../database/updateNote";
import PrimaryButton from "./PrimaryButton";
import { FirebaseContext } from "./Firebase";

const NoteCreator = ({ bookId, editingValue, setEditingValue }) => {
  const { user } = useContext(FirebaseContext);
  const [noteInput, setNoteInput] = useState(editingValue ? editingValue : "");
  function add(e){
    e.preventDefault();
    addNote(user.uid, bookId, noteInput);
    setNoteInput("");
  }
  function update(e){
    e.preventDefault();
    if(noteInput === editingValue){
      // How can I abort the editing?
    } else {
      updateNote(user.uid, bookId, noteInput);
      setEditingValue(null);
      setNoteInput("");
    }
  }
  return (
    <div>
      <form
        onSubmit={editingValue ? update : add}
      >
        <textarea
          value={noteInput}
          onChange={e => {
            setNoteInput(e.target.value);
          }}
          maxLength="1500"
          css={{
            width: "80%",
            height: "20vh",
            margin: "5vh auto"
          }}
        ></textarea>
        <PrimaryButton type="submit" css={{ margin: "0 auto 20px 0" }}>
          Spara
        </PrimaryButton>
      </form>
    </div>
  );
};

export default NoteCreator;
