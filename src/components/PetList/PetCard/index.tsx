import { useContext } from "react";
import { IIPet, petContext } from "../../../providers/petContext";
import { StyledPetCard } from "./style";

export interface IPetCardProps {
	pet: IIPet;
	index: number;
}

export function PetCard({ pet, index }: IPetCardProps) {
	const { setPetDetailsModal, setPetObject } = useContext(petContext);

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
				setPetDetailsModal(true);
				setPetObject(pet);
			}}>
			<div className="pet-img-container" style={{ backgroundImage: `url(${pet.img})` }}></div>
			<div className={`pet-description-container ${setColor(index)}`}>
				<p className="pet-description">{pet.name}</p>
				<p className="pet-description">{pet.age}</p>
			</div>
		</StyledPetCard>
	);
}
