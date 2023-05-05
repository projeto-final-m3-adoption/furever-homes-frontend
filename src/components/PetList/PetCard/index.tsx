import { useContext } from "react";
import { IIPet, petContext } from "../../../providers/petContext";
import { StyledPetCard } from "./style";
import { UserContext } from "../../../providers/userContext";
import AdoptedIconPurple from "../../../assets/AdoptedIconPurple.svg";

export interface IPetCardProps {
  pet: IIPet;
  index: number;
}

export function PetCard({ pet, index }: IPetCardProps) {
  const { setPetDetailsModal, setPetObject, setButtonIsDisabled } =
    useContext(petContext);
  const { tokenId } = useContext(UserContext);  

  const setColor = (id: number) => {
    const colors = [
      "pet-container-salmon",
      "pet-container-purple",
      "pet-container-blue",
      "pet-container-green",
      "pet-container-red",
      "pet-container-yellow",
    ];
    return colors[id % colors.length];
  };

  return (
    <StyledPetCard
      onClick={() => {
        if (!pet.isAdopted) {
          setPetDetailsModal(true);
          setPetObject(pet);
          if (tokenId === pet?.userId) {
            setButtonIsDisabled(true);            
          }
        }
      }}
    >
      <div
        className={`pet-img-container ${pet.isAdopted ? "grey-scale" : ""}`}
        style={{ backgroundImage: `url(${pet.img})` }}
      >
        {pet.isAdopted && (
          <img
            src={AdoptedIconPurple}
            alt="Adopted icon"
            className="adopted-icon"
          />
        )}
      </div>
      <div
        className={`pet-description-container ${
          pet.isAdopted ? "grey-scale-description" : setColor(index)
        }`}
      >
        <p className="pet-description">{pet.name}</p>
        <p className="pet-description">{pet.age}</p>
      </div>
    </StyledPetCard>
  );
}
