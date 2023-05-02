import { StyledHeader } from "./style";
import { IconButton } from "../Buttons/IconButton";
import MenuIcon from "../../assets/MenuIcon-cropped.svg";
import LoginIcon from "../../assets/LoginIcon-cropped.svg";
import RegisterIcon from "../../assets/RegisterIcon-cropped.svg";
import SearchIcon from "../../assets/SearchIcon.svg";
import SearchInput from "../../assets/SearchInput.svg";
import LogoutIcon from "../../assets/LogoutIcon.svg";
import RegisterPetIcon from "../../assets/RegisterPetIcon-cropped.svg";

export function Header() {
  const user = false;

  return (
    <StyledHeader>
      <nav className="headerNavbar">
        <p className="pageTitle">
          <big>Furever</big>Homes
        </p>
        <div className="navbarButtons">
          <div className="desktopSearchContainer">
            <form className="inputSearchContainer">
              <input
                type="text"
                placeholder="Encontre seu futuro melhor amigo..."
              />
              <button>
                <img src={SearchInput} alt="Pesquisar" />
              </button>
            </form>
            <IconButton
              id="searchIcon"
              button={true}
              img={SearchIcon}
              alt={"Pesquisar"}
              size={"4.5rem"}
            />
          </div>
          <div className="dropdownMenuOptions">
            <IconButton
              id="menuButton"
              button={true}
              img={MenuIcon}
              alt={"Abrir menu"}
              size={"2.5rem"}
            />
            <div className="menuButtonOptions">
              {!user ? (
                <>
                  <IconButton
                    id="registerButton"
                    button={false}
                    img={RegisterIcon}
                    alt={"Registro"}
                    size={"4.5rem"}
                  />
                  <IconButton
                    id="loginButton"
                    button={false}
                    img={LoginIcon}
                    alt={"Login"}
                    size={"4.5rem"}
                  />
                </>
              ) : null}
              {user ? (
                <>
                  <IconButton
                    id="registerPetButton"
                    button={true}
                    img={RegisterPetIcon}
                    alt={"Registro do pet"}
                    size={"4.5rem"}
                  />
                  <IconButton
                    id="logoutButton"
                    button={true}
                    img={LogoutIcon}
                    alt={"Logout"}
                    size={"4.5rem"}
                  />
                </>
              ) : null}
            </div>
          </div>
        </div>
      </nav>
      <form className="mobileSearchContainer">
        <input type="text" placeholder="Encontre seu futuro melhor amigo..." />
        <button>
          <img src={SearchInput} alt="Pesquisar" />
        </button>
      </form>
    </StyledHeader>
  );
}
