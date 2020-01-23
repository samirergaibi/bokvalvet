/** @jsx jsx */
import { jsx } from "@emotion/core";


const Button = ({ children }) => {
  return (
    <button css={{
      fontFamily: "'Roboto', sans-serif",
      fontSize: "16px",
      backgroundColor: "#3282b8",
      color: "#fff",
      border: "1px solid #3282b8",
      borderRadius: "5px",
      outline: "none",
      padding: "10px 20px",
      cursor: "pointer",
      margin: "10vh auto 0",
      transition: "all 0.3s",
      ":hover": {
        backgroundColor: "#479ad3",
        border: "1px solid #479ad3"
      }
    }}>
      {children}
    </button>
  );
}

export default Button;