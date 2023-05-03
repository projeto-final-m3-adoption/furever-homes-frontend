import { useContext } from "react";
import { petContext } from "../../providers/petContext";
import { StyledPetList } from "./style";

export function PetList() {
  const { petFull } = useContext(petContext);
  return (
    <>
      {petFull.map((pet) => {
        return (
          <StyledPetList key={pet.id}>
            <img src={pet.img} alt="imagem do pet" />
            <div>
              <p>{pet.name}</p>
              <p>{pet.age}</p>
            </div>
          </StyledPetList>
        );
      })}
    </>
  );
}
