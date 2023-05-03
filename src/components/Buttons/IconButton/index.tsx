import { Link } from "react-router-dom";
import { StyledIconButton } from "./style";
import { useContext } from "react";
import { UserContext } from "../../../providers/userContext";

export function IconButton({ button, img, alt, size, id }) {
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
        <Link
          to={
            alt === "Registro" ? "/register" : alt === "Login" ? "/login" : "/"
          }
          className="roundButton"
          id={id}
          size={size}
        >
          <img className="iconBtnImg" src={img} alt={alt} aria-label={alt} />
        </Link>
      )}
    </StyledIconButton>
  );
}
