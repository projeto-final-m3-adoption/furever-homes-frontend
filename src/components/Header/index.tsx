import { StyledHeader } from "./style";
import { IconButton } from "../Buttons/IconButton";
import MenuIcon from "../../assets/MenuIcon.svg";
import LoginIcon from "../../assets/LoginIcon.svg";
import RegisterIcon from "../../assets/RegisterIcon.svg";
import SearchIcon from "../../assets/SearchIcon.svg";
import SearchInput from "../../assets/SearchInput.svg";
import LogoutIcon from "../../assets/LogoutIcon.svg";
import RegisterPetIcon from "../../assets/RegisterPetIcon.svg";
import { useContext } from "react";
import { UserContext } from "../../providers/userContext";
import { petContext } from "../../providers/petContext";

export function Header() {
  const { token, loading } = useContext(UserContext);
  const { setTextSearch, submitSearch, textSearch } = useContext(petContext);

  if (loading) {
		return;
	}

  return (
    <StyledHeader>
      <nav className="headerNavbar">
        <p className="pageTitle">
          <big>Furever</big>Homes
        </p>
        <div className="navbarButtons">
          <div className="desktopSearchContainer">
            <form className="inputSearchContainer" onSubmit={submitSearch}>
              <input
                type="text"
                placeholder="Encontre seu futuro melhor amigo..."
                value={textSearch}
                onChange={(event) => setTextSearch(event.target.value)}
              />
              <button type="submit">
                <img
                  src={SearchInput}
                  alt="Pesquisar"
                  className="search-icon-button"
                />
              </button>
            </form>
            <IconButton
              id="searchIcon"
              button={true}
              img={SearchIcon}
              alt={"Pesquisar"}
              size={"4rem"}
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
              {!token ? (
                <>
                  <IconButton
                    id="registerButton"
                    button={false}
                    img={RegisterIcon}
                    alt={"Registro"}
                    size={"4rem"}
                  />
                  <IconButton
                    id="loginButton"
                    button={false}
                    img={LoginIcon}
                    alt={"Login"}
                    size={"4rem"}
                  />
                </>
              ) : (
                <>
                  <IconButton
                    id="registerPetButton"
                    button={true}
                    img={RegisterPetIcon}
                    alt={"Cadastrar pet"}
                    size={"4rem"}
                  />
                  <IconButton
                    id="logoutButton"
                    button={true}
                    img={LogoutIcon}
                    alt={"Logout"}
                    size={"4rem"}
                  />
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
      <form className="mobileSearchContainer" onSubmit={submitSearch}>
        <input
          type="text"
          placeholder="Encontre seu futuro melhor amigo..."
          value={textSearch}
          onChange={(event) => setTextSearch(event.target.value)}
        />
        <button type="submit">
          <img src={SearchInput} alt="Pesquisar" />
        </button>
      </form>
    </StyledHeader>
  );
}
