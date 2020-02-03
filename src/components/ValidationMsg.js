/** @jsx jsx */
import { jsx } from "@emotion/core";

const ValidationMsg = ({ msg }) => {
  return msg ? (
    <p
      css={{
        textAlign: "center",
        backgroundColor: "#c4ffd9",
        color: "#358b53",
        padding: "15px",
        borderRadius: "5px",
        display: "inline-block"
      }}
    >
      {msg}
    </p>
  ) : null;
};

export default ValidationMsg;
