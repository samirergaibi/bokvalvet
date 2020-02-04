/** @jsx jsx  */
import { jsx } from "@emotion/core";
import { useState } from "react";

import firebase from "./Firebase";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";
import ErrorMsg from "./ErrorMsg";

const UpdateProfile = ({ rerender, setRerender }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  function updateProfile(e) {
    e.preventDefault();
    if (firstname.length > 0 && lastname.length > 0) {
      const colors = [
        "1abc9c",
        "f1c40f",
        "2980b9",
        "8e44ad",
        "d870ad",
        "b49255",
        "f39c12"
      ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      firebase
        .auth()
        .currentUser.updateProfile({
          displayName: `${firstname} ${lastname}`,
          photoURL: `https://eu.ui-avatars.com/api/?name=${firstname}+${lastname}&background=${randomColor}&color=fff&rounded=true&size=300`
        })
        .then(() => {
          setRerender(!rerender);
          setFirstname("");
          setLastname("");
        })
        .catch(err => {
          console.log("Problem updating profile: ", err);
        });
    } else {
      setErrorMsg("Please fill out both the fields");
    }
  }
  return (
    <div
      css={{
        boxShadow:
          "0 1px 1px rgba(0,0,0,0.11), 0 2px 2px rgba(0,0,0,0.11), 0 4px 4px rgba(0,0,0,0.11), 0 6px 8px rgba(0,0,0,0.11), 0 8px 16px rgba(0,0,0,0.11)",
        borderRadius: "10px",
        padding: "20px"
      }}
    >
      <h3>Uppdatera profil</h3>
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <form onSubmit={updateProfile}>
          <Input
            placeholder="Förnamn"
            type="text"
            onChange={e => {
              setFirstname(e.target.value);
            }}
            value={firstname}
          />
          <Input
            placeholder="Efternamn"
            type="text"
            onChange={e => {
              setLastname(e.target.value);
            }}
            value={lastname}
          />
          <PrimaryButton type="submit">Spara</PrimaryButton>
        </form>
      </div>
      <ErrorMsg msg={errorMsg} />
    </div>
  );
};

export default UpdateProfile;
