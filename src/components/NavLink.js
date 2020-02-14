/** @jsx jsx  */
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

import mq from "../utils/mediaQueries";

const NavLink = (props) => {

  const isActive = ({ isCurrent }) => {
    return isCurrent ? {
      id: "active-link"
     } : null
  }

  return(
    <Link {...props} getProps={isActive} css={{
      color: "#fff",
      textDecoration: "none",
      fontSize: "32px",
      margin: "1.5vh 0",
      position: "relative",
      [mq[2]]: {
        fontSize: "20px",
        marginLeft: "20px",
        marginRight: "20px",
        "&::before": {
          content: "''",
          position: "absolute",
          width: "100%",
          height: "1.5px",
          bottom: "-2px",
          backgroundColor: "#fff",
          transform: "scale(0)",
          visibility: "hidden",
          transition: "all 0.3s ease"
        },
        "&:hover::before": {
          transform: "scale(1)",
          visibility: "visible"
        }
      },
    }}></Link>
  );
}

export default NavLink;