import { useContext } from "react";
import { petContext } from "../../providers/petContext";
import { PetCard } from "./PetCard";
import { StyledPetList } from "./style";
import { Loader } from "../Loader";

export function PetList() {
  const { petFull, petsSearchFilter } = useContext(petContext);

  return (
    <>
      {petFull.length > 0 ? (
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
      ) : (
        <Loader />
      )}
    </>
  );
}
{
  /* const { petFull} = useContext(petContext);
  let userId = localStorage.getItem("@FUREVERHOMES@ID")
  if (userId) {
    userId = JSON.parse(userId)
  }
  

  return (
    <>
      
      {userId && petFull.map((pet) => {        
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
>>>>>>> ec6fa2aa1926f4864243c9839979d6c8cc701b8e
    </>
  );
} */
}
