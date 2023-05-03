import { Carousel } from "../../components/Carousel";
import { Header } from "../../components/Header";
import { StyledHome } from "./style";
import dogIcon from "../../assets/DogFilterIcon.svg";
import catIcon from "../../assets/CatFilterIcon.svg";
import rabbitIcon from "../../assets/RabbitFilterIcon.svg";
import resetButton from "../../assets/ResetFilter.svg";
import { PetList } from "../../components/PetList";
import { Footer } from "../../components/Footer";
import { useContext } from "react";
import { petContext } from "../../providers/petContext";

export function Home() {
  const { filterButtons } = useContext(petContext);
  return (
    <>
      <Header />
      <StyledHome>
        <Carousel />
        <section className="animal-list-container">
          <img src={dogIcon} alt="" className="dogIcon" onClick={() => filterButtons("cachorro")} />
          <img src={catIcon} alt="" className="catIcon" onClick={() => filterButtons("gato")} />
          <img src={rabbitIcon} alt="" className="rabbitIcon" onClick={() => filterButtons("outros")} />
          <div className="containerReset">
            <img src={resetButton} alt="resetButton" className="buttonReset" onClick={() => filterButtons("")} />
          </div>
        </section>
        <PetList />
      </StyledHome>
      <Footer />
    </>
  );
}
