/** @jsx jsx */
import { jsx } from "@emotion/core";

const SecondaryButton = (props) => {
  const { children, onClick } = props;
  return (
    <button
      {...props}
      onClick={onClick}
      css={{
        fontWeight: 600,
        letterSpacing: "1px",
        fontSize: "16px",
        backgroundColor: "#3282b8",
        color: "#fff",
        border: "1px solid #3282b8",
        borderRadius: "10px",
        outline: "none",
        padding: "10px 20px",
        cursor: "pointer",
        transition: "all 0.3s",
        ":hover": {
          backgroundColor: "#479ad3",
          border: "1px solid #479ad3"
        },
        ":disabled": {
          color: "#d7d7d7",
          opacity: "0.5",
          cursor: "not-allowed",
          ":hover": {
            backgroundColor: "#3282b8",
            border: "1px solid #3282b8"
          }
        }
      }}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
