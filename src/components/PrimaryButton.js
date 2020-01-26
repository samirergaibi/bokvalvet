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
      border: "1px solid #d6d9dc",
      outline: "none",
      borderRadius: "10px",
      padding: "10px 25px",
      backgroundColor: "#1DB954",
      color: "#fff",
      cursor: "pointer",
      marginTop: "20px",
      transition: "all 0.3s",
      ":hover": {
        backgroundColor: "#1ED760"
      }
    }}
  >
    { children }
  </button>
  );
}

export default PrimaryButton;