/** @jsx jsx */
import { jsx } from "@emotion/core";

const HamburgerButton = ({ isClosed, setIsClosed }) => {

  const lineStyle = {
    position: "absolute",
    width: "40px",
    height: "4px",
    borderRadius: "4px",
    backgroundColor: "#fff",
  };

  return (
    <div onClick={() => { setIsClosed(!isClosed) }} css={{
      position: "relative",
      zIndex: 2,
      width: "40px",
      height: "24px",
    }}>
      <div
        css={{
          ...lineStyle,
          top: "auto",
          bottom: 0,
          transitionDelay: isClosed ? ".13s" : ".22s",
          transitionTimingFunction: isClosed ? "cubic-bezier(.55,.055,.675,.19)" : "cubic-bezier(.215,.61,.355,1)",
          transitionDuration: ".13s",
          transform: isClosed ? "initial" : "translate3d(0,-10px,0) rotate(-45deg)",
          "&::before": {
            ...lineStyle,
            content: '""',
            display: "block",
            top: isClosed ? "-10px" : 0,
            transition: isClosed ? "top .12s cubic-bezier(.33333,.66667,.66667,1) .2s,transform .13s cubic-bezier(.55,.055,.675,.19)" : "top .1s cubic-bezier(.33333,0,.66667,.33333) .16s,transform .13s cubic-bezier(.215,.61,.355,1) .25s",
            transform: isClosed ? "initial" : "rotate(-90deg)",
          },
          "&::after": {
            ...lineStyle,
            content: '""',
            display: "block",
            top: isClosed ? "-20px" : 0,
            transition: isClosed ? "top .2s cubic-bezier(.33333,.66667,.66667,1) .2s,opacity .1s linear" : "top .2s cubic-bezier(.33333,0,.66667,.33333),opacity .1s linear .22s",
            opacity: isClosed ? 100 : 0,
          }
        }}
      ></div>
    </div>
  );
};

export default HamburgerButton;
