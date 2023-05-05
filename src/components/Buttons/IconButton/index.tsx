import { StyledIconButton, StyledLink } from "./style";
import { useContext } from "react";
import { UserContext } from "../../../providers/userContext";
import { petContext } from "../../../providers/petContext";

export interface IIconButtonProps {
  id?: string;
  button: boolean;
  img: string;
  alt: string;
  size: string;
}

export function IconButton({ button, img, alt, size, id }: IIconButtonProps) {
  const { logOut, setLoginModal } = useContext(UserContext);
  const { filterButtons, setRegisterPetModal } = useContext(petContext);

  function closeFormModals(){
    setLoginModal(false);
    setRegisterPetModal(false);
  }

  function onButtonClick(alt: string) {
    alt === "Logout"
      ? logOut()
      : alt === "Filtrar por cachorros"
      ? filterButtons("cachorro")
      : alt === "Filtrar por gatos"
      ? filterButtons("gato")
      : alt === "Filtrar por outros"
      ? filterButtons("outros")
      : alt === "Resetar filtro"
      ? filterButtons("")
      : alt === "Cadastrar pet"
      ? setRegisterPetModal(true)
      : alt === "Fechar login"
      ? closeFormModals()
      : null;
  }

  return (
    <StyledIconButton size={size} className="roundButtonContainer">
      {button ? (
        <button
          className="roundButton"
          id={id}
          onClick={() => {
            onButtonClick(alt);
          }}
        >
          <img className="iconBtnImg" src={img} alt={alt} aria-label={alt} />
        </button>
      ) : (
        <StyledLink
          to={alt === "Registro" ? "/register" : alt === "Login" ? "/login" : "/"}
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
