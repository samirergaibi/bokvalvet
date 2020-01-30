/** @jsx jsx */
import { jsx } from "@emotion/core";


const PrimaryButton = ({ children, type="button", onClick }) => {
  return (
    <button
    onClick={onClick}
    type={type}
    css={{
      fontWeight: 600,
      fontSize: "16px",
      letterSpacing: "1px",
      border: "none",
      outline: "none",
      borderRadius: "10px",
      padding: "11px 26px",
      backgroundColor: "#1DB954",
      color: "#fff",
      cursor: "pointer",
      marginTop: "20px",
      transition: "all 0.3s ease 0s",
      boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
      ":hover": {
        backgroundColor: "#1ED760",
        transform: "translateY(-2px)",
        boxShadow: "0 7px 10px rgba(0, 0, 0, 0.3)",
      },
      ":focus": {
        transform: "translateY(2px)",
        boxShadow: "0 3px 10px rgba(0, 0, 0, 0.3)",
      }
    }}
  >
    { children }
  </button>
  );
}

export default PrimaryButton;