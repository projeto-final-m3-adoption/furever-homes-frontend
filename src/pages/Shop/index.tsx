import { useContext } from "react";
import { ListPets } from "../../components/ListPets";
import { StyledHome } from "./style";
import dogIcon from "../../assets/DogFilterIcon.svg";
import catIcon from "../../assets/CatFilterIcon.svg";
import rabbitIcon from "../../assets/RabbitFilterIcon.svg";
import resetButton from "../../assets/ResetFilter.svg";

export function Shop() {
  return (
    <StyledHome>
      <section>
        <img src={dogIcon} alt="" className="dogIcon" />
        <img src={catIcon} alt="" className="catIcon" />
        <img src={rabbitIcon} alt="" className="rabbitIcon" />
        <div className="containerReset">
          <img src={resetButton} alt="resetButton" className="buttonReset" />
        </div>
      </section>
      <ul>
        <ListPets />
      </ul>
    </StyledHome>
  );
}
