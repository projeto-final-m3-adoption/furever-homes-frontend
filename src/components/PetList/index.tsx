import { useContext } from "react";
import { petContext } from "../../providers/petContext";
import { PetCard } from "./PetCard";
import { StyledPetList } from "./style";

export function PetList() {
  const { petFull, petsSearchFilter } = useContext(petContext);

  return (
    <StyledPetList>
      {petsSearchFilter.length === 0
        ? petFull.map((pet, index) => (
            <li key={pet.id}>
              <PetCard pet={pet} index={index} />
            </li>
          ))
        : petsSearchFilter.map((pet, index) => (
            <li key={pet.id}>
              <PetCard pet={pet} index={index} />
            </li>
          ))}
    </StyledPetList>
  );
}
