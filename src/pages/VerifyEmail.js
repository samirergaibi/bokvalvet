/** @jsx jsx  */
import { jsx } from "@emotion/core";


const VerifyEmail = () => {
  return(
    <div css={{
      textAlign: "center",
      width: "80vw",
      margin: "0 auto",
      letterSpacing: "1px",
      lineHeight: "1.6"
    }}>
      <h1>Verifiera din epost-adress</h1>
      <p>För att börja använda Bokvalvets tjänster behöver du verifiera din epost-adress i mejlet vi har skickat till kontots angivna epost-adressen.</p>
      <p css={{ fontWeight: "600" }}>Du kan stänga denna flik när du är klar.</p>
    </div>
  );
}

export default VerifyEmail;