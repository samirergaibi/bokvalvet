/** @jsx jsx */
import { jsx } from "@emotion/core";


const PrimaryButton = (props) => {
  const { children } = props;
  return (
    <button
    {...props}
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
      },
      ":active": {
        backgroundColor: "#1DB954",
      }
    }}
  >
    { children }
  </button>
  );
}

export default PrimaryButton;