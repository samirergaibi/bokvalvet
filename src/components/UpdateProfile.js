/** @jsx jsx  */
import { jsx } from "@emotion/core";
import { useState, useContext } from "react";

import firebase, { FirebaseContext} from "./Firebase";
import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";

const UpdateProfile = ({ rerender, setRerender }) => {
  const { user } = useContext(FirebaseContext);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  function updateProfile(e){
    e.preventDefault();
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
    if(user.providerData && user.providerData[0] && user.providerData[0].providerId === "password"){
      firebase.auth().currentUser.updateProfile({
        displayName: `${firstname} ${lastname}`,
        photoURL: `https://eu.ui-avatars.com/api/?name=${firstname}+${lastname}&background=${randomColor}&color=fff&rounded=true&size=300`
      }).then(() => {
        setRerender(!rerender);
        setFirstname("");
        setLastname("");
      }).catch(err => {
        console.log("Problem updating profile: ", err);
      })
    } else {
      firebase.auth().currentUser.updateProfile({
        displayName: `${firstname} ${lastname}`
      }).then(() => {
        setFirstname("");
        setLastname("");
      }).catch(err => {
        console.log("Problem updated profile: ", err);
      })
    }
  };
  return (
    <div>
      <h3>Profilinställningar</h3>
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
    </div>
  );
};

export default UpdateProfile;
