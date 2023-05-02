import { useContext } from "react";
import { IIPet, petContext } from "../../providers/petContext";

export function ListPets() {
  const { petFull } = useContext(petContext);
  return petFull.map((pet) => {
    return (
      <li key={pet.id}>
        <img src={pet.img} alt="imagem do pet" />
        <span>
          <p>{pet.name}</p>
          <p>{pet.age}</p>
        </span>
      </li>
    );
  });
}
