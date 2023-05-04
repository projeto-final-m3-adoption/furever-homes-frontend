import { useContext } from "react";
import { petContext } from "../../../providers/petContext";
import { StyledPetModal } from "./style";
import CloseIcon from "../../../assets/CloseIconBK.svg";
import { UserContext } from "../../../providers/userContext";

export function PetDetailsModal() {
  const {
    petFull,
    petObject,
    closePetDetailsModal,
    adoptPet,
    setPetDetailsModal,
  } = useContext(petContext);
  const { user, setLoginModal } = useContext(UserContext);

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

  let color = "";
  for (let index = 0; index < petFull.length; index++) {
    if (petFull[index].id === petObject?.id) {
      color = setColor(index);
    }
  }

  return (
    <StyledPetModal role="dialog" className="dialog" url={petObject?.img}>
      <div className={petObject?.isAdopted ? "isAdopted" : "petModal"}>
        <button className="closeModal" onClick={() => closePetDetailsModal()}>
          <img src={CloseIcon} alt="Fechar" />
        </button>
        <div className="petImg"></div>
        <div className={`petDescriptionContainer ${color}`}>
          <div className="petInfo">
            <span className="petInfoOne">
              <p>{petObject?.name}</p>
              <p>{petObject?.age}</p>
            </span>
            <span className="petInfoTwo">
              <div className="petTypeSize">
                <p>{petObject?.type}</p>
                <p>{petObject?.size}</p>
              </div>
              <p>{petObject?.gender}</p>
            </span>
          </div>
          <div className="petDescription">
            <p>{petObject?.description}</p>
          </div>
          <div>
            {petObject?.adress ? (
              <p className="petAddress">{petObject?.adress}</p>
            ) : null}
            {petObject?.isAdopted ? (
              <p>ADOTADO! </p>
            ) : (
              <button
                className="petAdopt"
                onClick={() => {
                  setPetDetailsModal(false);
                  user ? adoptPet(petObject?.id) : setLoginModal(true);
                }}
              >
                Me adote!
              </button>
            )}
          </div>
        </div>
      </div>
    </StyledPetModal>
  );
}
