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
        transition: "all 0.3s ease 0s",
        boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
        ":hover": {
          backgroundColor: "#479ad3",
          border: "1px solid #479ad3",
          transform: "translateY(-2px)",
          boxShadow: "0 7px 10px rgba(0, 0, 0, 0.3)",
        },
        ":active": {
          transform: "translateY(2px)",
          boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
        },
        ":disabled": {
          color: "#d7d7d7",
          opacity: "0.5",
          cursor: "not-allowed",
          ":hover": {
            backgroundColor: "#3282b8",
            border: "1px solid #3282b8",
            transform: "initial",
            boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
          }
        }
      }}
    >
      {children}
    </button>
  );
};

export default SecondaryButton;
