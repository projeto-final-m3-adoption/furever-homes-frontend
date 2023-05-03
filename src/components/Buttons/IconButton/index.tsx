import { Link } from "react-router-dom";
import { StyledIconButton, StyledLink } from "./style";
import { useContext } from "react";
import { UserContext } from "../../../providers/userContext";

export interface IIconButtonProps {
  id?: string;
  button: boolean;
  img: string;
  alt: string;
  size: string;
}

export function IconButton({ button, img, alt, size, id }: IIconButtonProps) {
  const { logOut } = useContext(UserContext);

  return (
    <StyledIconButton size={size} className="roundButtonContainer">
      {button ? (
        <button
          className="roundButton"
          id={id}
          onClick={() => {
            alt === "Logout" ? logOut() : null;
          }}
        >
          <img className="iconBtnImg" src={img} alt={alt} aria-label={alt} />
        </button>
      ) : (
        <StyledLink
          to={
            alt === "Registro" ? "/register" : alt === "Login" ? "/login" : "/"
          }
          className="roundButton"
          id={id}
          size={size}
        >
          <img className="iconBtnImg" src={img} alt={alt} aria-label={alt} />
        </StyledLink>
      )}
    </StyledIconButton>
  );
}
