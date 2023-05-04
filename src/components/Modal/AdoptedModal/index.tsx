// import { useContext } from "react";
// import { petContext } from "../../../providers/petContext";
import { StyledAdoptedModal } from "./style";
import AdoptedImg from '../../../assets/Adopted.svg'

export function AdoptedModal() {
	return (
		<StyledAdoptedModal role="dialog" className="dialog">
			<figure className="adoptedModal">
        <p>Seu melhor amigo chegou!!!</p>
				<img src={AdoptedImg} alt="" />
			</figure>
		</StyledAdoptedModal>
	);
}
