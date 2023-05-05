import { Carousel } from "../../components/Carousel";
import { Header } from "../../components/Header";
import { StyledHome } from "./style";
import dogIcon from "../../assets/DogFilterIcon.svg";
import catIcon from "../../assets/CatFilterIcon.svg";
import rabbitIcon from "../../assets/RabbitFilterIcon.svg";
import resetButton from "../../assets/ResetFilter.svg";
import { PetList } from "../../components/PetList";
import { Footer } from "../../components/Footer";
import { IconButton } from "../../components/Buttons/IconButton";
import { useContext } from "react";
import { petContext } from "../../providers/petContext";
import { PetDetailsModal } from "../../components/Modal/PetDetailsModal";
import { LoginModal } from "../../components/Modal/LoginModal";
import { UserContext } from "../../providers/userContext";
import { AdoptedModal } from "../../components/Modal/AdoptedModal";
import { RegisterPetModal } from "../../components/Modal/RegisterPetModal";

export function Home() {
  const { registerPetModal, petDetailsModal, petObject, adoptedModal } =
    useContext(petContext);
  const { loginModal, token } = useContext(UserContext);

  return (
    <>
      <Header />
      <StyledHome>
        <Carousel />
        <section className="petListContainer">
          <div className="petListHeader">
            <div className="petListFilters">
              <IconButton
                button={true}
                img={dogIcon}
                alt={"Filtrar por cachorros"}
                size={"4rem"}
                id={"dogIcon"}
              />
              <IconButton
                button={true}
                img={catIcon}
                alt={"Filtrar por gatos"}
                size={"4rem"}
                id={"catIcon"}
              />
              <IconButton
                button={true}
                img={rabbitIcon}
                alt={"Filtrar por outros"}
                size={"4rem"}
                id={"rabbitIcon"}
              />
            </div>
            <IconButton
              button={true}
              img={resetButton}
              alt={"Resetar filtro"}
              size={"4rem"}
              id={"buttonReset"}
            />
          </div>
          <PetList />
        </section>
      </StyledHome>
      <Footer />
      {registerPetModal ? <RegisterPetModal /> : null}
      {petDetailsModal ? <PetDetailsModal /> : null}
      {token && petObject ? <PetDetailsModal /> : null}
      {loginModal ? <LoginModal /> : null}
      {adoptedModal ? <AdoptedModal /> : null}
    </>
  );
}
