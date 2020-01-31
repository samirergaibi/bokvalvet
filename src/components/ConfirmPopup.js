/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";

import mq from "../utils/mediaQueries";

const ConfirmPopup = ({
  visible,
  setVisible,
  deleteFunc,
  msg = "Are you sure?"
}) => {
  const popupRef = useRef();
  const closeRef = useRef();

  function closePopup(event) {
    if (event.target.contains(popupRef.current)) {
      setVisible(false);
    }
  }
  const buttonStyle = {
    border: "none",
    padding: "15px 30px",
    color: "#fff",
    fontWeight: 600,
    letterSpacing: "1px",
    outline: "none",
    margin: "0 10px",
    cursor: "pointer",
    borderRadius: "10px",
    transition: "all 0.3s ease 0s",
    boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)",
    ":hover": {
      transform: "translateY(-4px)",
      boxShadow: "0 9px 10px rgba(0, 0, 0, 0.3)"
    },
    [mq[2]]: {
      padding: "20px 40px"
    }
  };
  return (
    <div
      ref={popupRef}
      onClick={closePopup}
      css={{
        display: visible ? "flex" : "none",
        height: "100%",
        width: "100%",
        backgroundColor: "rgba(94, 110, 141, 0.9)",
        position: "fixed",
        zIndex: "1",
        left: 0,
        top: 0,
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        transition: "all 0.3s"
      }}
    >
      <div
        css={{
          backgroundColor: "#fff",
          position: "relative",
          padding: "40px 20px",
          borderRadius: "10px",
          width: "90%",
          [mq[2]]: {
            width: "initial",
            padding: "40px 80px"
          }
        }}
      >
        <button
          onClick={() => {
            setVisible(false);
          }}
          ref={closeRef}
          css={{
            position: "absolute",
            top: 10,
            right: 10,
            border: "none",
            outline: "none",
            background: "none",
            cursor: "pointer",
            translate: "all 0.3s ease 0",
            ":hover": {
              transform: "translateY(-1px)"
            }
          }}
        >
          <FontAwesomeIcon icon="times" css={{ fontSize: "24px" }} />
        </button>
        <p>{msg}</p>
        <div
          css={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
            [mq[2]]: {
              marginTop: "40px"
            }
          }}
        >
          <button
            onClick={() => {
              deleteFunc();
              setVisible(false);
            }}
            css={{ ...buttonStyle, backgroundColor: "#e02424" }}
          >
            TA BORT
          </button>
          <button
            onClick={() => {
              setVisible(false);
            }}
            css={{ ...buttonStyle, backgroundColor: "#676767" }}
          >
            AVBRYT
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmPopup;
