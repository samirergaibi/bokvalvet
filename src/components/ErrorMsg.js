/** @jsx jsx */
import { jsx } from "@emotion/core";

const ErrorMsg = (props) => {
  const { msg } = props;
  return (
    msg ? (
      <p
        {...props}
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
