/** @jsx jsx  */
import { jsx } from "@emotion/core";

const FacebookButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#385499",
        color: "#fff",
        border: "transparent",
        outline: "none",
        borderRadius: "10px",
        padding: "10px 25px",
        width: "100%",
        ":hover": {
          cursor: "pointer",
          backgroundColor: "#314a86",
        }
      }}
    >
      <svg
        aria-hidden="true"
        width="18"
        height="18"
        viewBox="0 0 18 18"
      >
        <path
          d="M3 1a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3zm6.55 16v-6.2H7.46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.19.48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h-2.5z"
          fill="#fff"
        ></path>
      </svg>
      <span
        css={{
          fontFamily: "'Roboto', sans-serif",
          fontSize: "16px",
          marginLeft: "10px"
        }}
      >
        Logga in med Facebook
      </span>
    </button>
  );
};

export default FacebookButton;
