import { Carousel } from "../../components/Carousel";
import { Header } from "../../components/Header";
import { StyledHome } from "./style";
import dogIcon from "../../assets/DogFilterIcon.svg";
import catIcon from "../../assets/CatFilterIcon.svg";
import rabbitIcon from "../../assets/RabbitFilterIcon.svg";
import resetButton from "../../assets/ResetFilter.svg";
import { PetList } from "../../components/PetList";

export function Home() {
  return (
    <>
      <Header />

      <StyledHome>
      <Carousel/>
      <section>
          {/* <div className="swiperCards"></div> */}
          {/* <CardList /> */}
          {/* <footer className="homeFooter"></footer> */}
          <img src={dogIcon} alt="" className="dogIcon" />
          <img src={catIcon} alt="" className="catIcon" />
          <img src={rabbitIcon} alt="" className="rabbitIcon" />
          <div className="containerReset">
            <img src={resetButton} alt="resetButton" className="buttonReset" />
          </div>
        </section>
        <ul>
          <PetList />
        </ul>
      </StyledHome>
    </>
  );
}
