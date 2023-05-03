import { StyledFooter } from "./style";
import HeartIcon from "../../assets/Heart.svg";

export function Footer() {
  return (
    <StyledFooter>
      <p className="footer-paragraph">
        Made with
        <img src={HeartIcon} alt={"Coracao"} className="footer-heart" /> by
        Amanda, Bianca, Bruno e Mateus
      </p>
    </StyledFooter>
  );
}
