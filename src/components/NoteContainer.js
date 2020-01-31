/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useContext } from "react";

import { db, FirebaseContext } from "./Firebase";
import NoteDisplayed from "./NoteDisplayed";
import NoteCreator from "./NoteCreator";

const NoteContainer = ({ bookId }) => {
  const { user } = useContext(FirebaseContext);
  const [visible, setVisible] = useState(false);
  const [note, setNote] = useState();
  const [editingValue, setEditingValue] = useState();

  useEffect(() => {
    const unsubscribe = db
      .collection("notes")
      .where("user_id", "==", user.uid)
      .where("book_id", "==", bookId)
      .onSnapshot(snapshot => {
        let fetchedNote;
        snapshot.forEach(doc => {
          fetchedNote = { ...doc.data(), note_id: doc.id };
        });
        setNote(fetchedNote);
      });
    return unsubscribe;
  }, [bookId, user.uid]);

  function editNote() {
    setEditingValue(note.note);
    setNote(null);
  }
  return (
    <div
      css={{
        textAlign: "center"
      }}
    >
      <button
        onClick={() => {
          setVisible(prev => !prev);
        }}
        css={{
          backgroundColor: "transparent",
          border: "none",
          fontSize: "16px",
          fontFamily: "'Raleway'",
          outline: "none",
          marginBottom: "10px"
        }}
      >
        {note ? "Se Notering" : "Skriv Notering"}
        <FontAwesomeIcon
          icon="chevron-up"
          css={{
            marginLeft: "4px",
            position: "relative",
            top: "2px",
            transition: "all 0.4s",
            transform: visible ? "rotate(0deg)" : "rotate(180deg)",
          }}
        />
      </button>
      <div
        css={{
          maxHeight: visible ? "1500px" : "0px",
          transition: visible ? "all 0.4s ease-in" : "all 0.4s ease-out",
          overflow: "hidden"
        }}
      >
        {note ? (
          <NoteDisplayed
            note={note}
            setNote={setNote}
            editNote={editNote}
            setNoteVisible={setVisible}
          />
        ) : (
          <NoteCreator
            user={user}
            bookId={bookId}
            editingValue={editingValue}
            setEditingValue={setEditingValue}
          />
        )}
      </div>
    </div>
  );
};

export default NoteContainer;
