/** @jsx jsx */
import { jsx } from "@emotion/core";


const SubmitButton = ({ text }) => {
  return (
    <button
    type="submit"
    css={{
      fontFamily: "'Roboto', sans-serif",
      fontSize: "16px",
      border: "1px solid #d6d9dc",
      outline: "none",
      borderRadius: "5px",
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
    { text }
  </button>
  );
}

export default SubmitButton;