/** @jsx jsx */
import { jsx } from "@emotion/core";

import Input from "../components/Input";
import PrimaryButton from "../components/PrimaryButton";

const UpdatePassword = () => {
  return (
    <div>
      <h3>Ändra lösenord</h3>
      <div
        css={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <form>
          <Input placeholder="Lösenord" type="password" />
          <Input placeholder="Upprepa lösenord" type="password" />
          <PrimaryButton type="submit">Spara</PrimaryButton>
        </form>
      </div>
    </div>
  );
};

export default UpdatePassword;
