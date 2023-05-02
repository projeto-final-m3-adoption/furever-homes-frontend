import { useContext } from "react";
import { petContext } from "../../providers/petContext";
import { StyledListPets } from "./style";

export function ListPets() {
  const { petFull } = useContext(petContext);

  return (
    <>
      {petFull.map((pet) => {
        return (
          <StyledListPets key={pet.id}>
            <img src={pet.img} alt="imagem do pet" />
            <div>
              <p>{pet.name}</p>
              <p>{pet.age}</p>
            </div>
          </StyledListPets>
        );
      })}
    </>
  );
}
