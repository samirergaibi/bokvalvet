/** @jsx jsx */
import { jsx } from "@emotion/core";

const ErrorMsg = ({ msg }) => {
  return (
    msg ? (
      <p
        css={{
          textAlign: "center",
          backgroundColor: "#fee9ed",
          color: "#df5a71",
          padding: "15px 0",
          borderRadius: "5px"
        }}
      >
        {msg}
      </p>
    ) : null
  );
};

export default ErrorMsg;
