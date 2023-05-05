import { useContext } from "react";
import { petContext } from "../../../providers/petContext";
import { StyledPetModal } from "./style";
import CloseIcon from "../../../assets/CloseIconBK.svg";
import { UserContext } from "../../../providers/userContext";
import { toast } from "react-toastify";

export function PetDetailsModal() {
	const {
		petFull,
		petObject,
		closePetDetailsModal,
		adoptPet,
		setPetDetailsModal,
	} = useContext(petContext);
	const { user, setLoginModal, tokenId } = useContext(UserContext);

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
			<div className="petModal">
				<button
					className="closeModal"
					onClick={() => {
						closePetDetailsModal();
					}}>
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
						<p className="petAddress">{petObject?.adress}</p>
						<button
							className="petAdopt"
							onClick={() => {
								setPetDetailsModal(false);
								petObject?.userId === tokenId
									? toast.error(
											"Você não pode adotar um animal que você cadastrou!"
									  )
									: user ? adoptPet(petObject?.id) : setLoginModal(true);
							}}>
							Me adote!
						</button>
            {/* <button
							className="petAdopt"
							disabled={petObject?.userId === tokenId}
							onClick={() => {
								setPetDetailsModal(false);
								user ? adoptPet(petObject?.id) : setLoginModal(true);
							}}>
							Me adote!
						</button> */}
						{/* {petObject?.userId === tokenId ?
            <p>Você não pode adotar um animal que você cadastrou!</p>
						: 
            <button
							className="petAdopt"
							disabled={petObject?.userId === tokenId}
							onClick={() => {
								setPetDetailsModal(false);
								user ? adoptPet(petObject?.id) : setLoginModal(true);
							}}>
							Me adote!
						</button>
            } */}
					</div>
				</div>
			</div>
		</StyledPetModal>
	);
}
