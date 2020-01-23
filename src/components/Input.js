/** @jsx jsx */
import { jsx } from "@emotion/core";

const Input = ({ type, value, onChange, placeholder }) => {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      css={{
        position: "relative",
        display: "block",
        padding: "10px 20px 10px 10px",
        borderRadius: "5px",
        border: "1px solid #d6d9dc",
        marginTop: "20px"
      }}
    />
  );
};

export default Input;
