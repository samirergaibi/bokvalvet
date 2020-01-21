/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState } from "react";

const HamburgerButton = () => {

  const lineStyle = {
    position: "absolute",
    width: "40px",
    height: "4px",
    borderRadius: "4px",
    backgroundColor: "#fff",
  };

  const beforeClosed = {
    content: '""',
    display: "block",
    top: "-10px",
    transition: "top .12s cubic-bezier(.33333,.66667,.66667,1) .2s,transform .13s cubic-bezier(.55,.055,.675,.19)",
  }
  const beforeOpen = {
    content: '""',
    top: 0,
    transition: "top .1s cubic-bezier(.33333,0,.66667,.33333) .16s,transform .13s cubic-bezier(.215,.61,.355,1) .25s",
    transform: "rotate(90deg)",
  }
  const afterClosed = {
    content: '""',
    display: "block",
    top: "-20px",
    transition: "top .2s cubic-bezier(.33333,.66667,.66667,1) .2s,opacity .1s linear",
  }
  const afterOpen = {
    content: '""',
    top: 0,
    transition: "top .2s cubic-bezier(.33333,0,.66667,.33333),opacity .1s linear .22s",
    opacity: 0,
  }
  const mainClosed = {
    top: "auto",
    bottom: 0,
    transitionDelay: ".13s",
    transitionTimingFunction: "cubic-bezier(.55,.055,.675,.19)",
    transitionDuration: ".13s",
  }
  const mainOpen = {
    top: "auto",
    bottom: 0,
    transitionDelay: ".22s",
    transitionTimingFunction: "cubic-bezier(.215,.61,.355,1)",
    transform: "translate3d(0,-10px,0) rotate(-45deg)",
  }

  const [isClosed, setIsClosed] = useState(true);
  const [mainStyle, setMainStyle] = useState(mainClosed);
  const [beforeStyle, setBeforeStyle] = useState(beforeClosed);
  const [afterStyle, setAfterStyle] = useState(afterClosed);

  return (
    <div onClick={() => {
      if(isClosed === true){
        setIsClosed(false);
        setMainStyle(mainOpen);
        setBeforeStyle(beforeOpen);
        setAfterStyle(afterOpen);
      } else {
        setIsClosed(true);
        setMainStyle(mainClosed);
        setBeforeStyle(beforeClosed);
        setAfterStyle(afterClosed);
      }
    }} css={{
      position: "relative",
      width: "40px",
      height: "24px"
    }}>
      <div
        css={{
          ...lineStyle,
          ...mainStyle,
          "&::before": {
            ...lineStyle,
            ...beforeStyle,
          },
          "&::after": {
            ...lineStyle,
            ...afterStyle,
          }
        }}
      ></div>
    </div>
  );
};

export default HamburgerButton;
