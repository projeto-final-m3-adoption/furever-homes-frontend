import { Carousel } from "../../components/Carousel";
import { Header } from "../../components/Header";
import { StyledHome } from "./style";
import dogIcon from "../../assets/DogFilterIcon.svg";
import catIcon from "../../assets/CatFilterIcon.svg";
import rabbitIcon from "../../assets/RabbitFilterIcon.svg";
import resetButton from "../../assets/ResetFilter.svg";
import { PetList } from "../../components/PetList";
import { Footer } from "../../components/Footer";
import { IconButton } from "../../components/Buttons/IconButton";
import { useContext } from "react";
import { petContext } from "../../providers/petContext";
import { PetDetailsModal } from "../../components/Modal/PetDetailsModal";

export function Home() {
	const { petDetailsModal } = useContext(petContext);

	// const { nomeModal } = useContext(petContext);
	// const [registerPetModal, setRegisterPetModal] = useState(false);
	// const [petDetailsModal, setPetDetailsModal] = useState(false);
	// const [loginModal, setLoginModal] = useState(false);
	// const [adoptedModal, setAdoptedModal] = useState(false);
	// const [petObject, setPetObject] = useState({});

	// function openModal(object = null) {
	// 	setTechModal(true);
	// 	object ? setTechObject(object) : setTechObject(null);
	// }

	// const closeModal = () => {
	//   setRegisterPetModal(false);
	//   setPetDetailsModal(false);
	//   setLoginModal(false);
	// };

	return (
		<>
			<Header />
			<StyledHome>
				<Carousel />
				<section className="petListContainer">
					<div className="petListHeader">
						<div className="petListFilters">
							<IconButton
								button={true}
								img={dogIcon}
								alt={"Filtrar por cachorros"}
								size={"4.5rem"}
								id={"dogIcon"}
							/>
							<IconButton
								button={true}
								img={catIcon}
								alt={"Filtrar por gatos"}
								size={"4.5rem"}
								id={"catIcon"}
							/>
							<IconButton
								button={true}
								img={rabbitIcon}
								alt={"Filtrar por outros"}
								size={"4.5rem"}
								id={"rabbitIcon"}
							/>
						</div>
						<IconButton
							button={true}
							img={resetButton}
							alt={"Resetar filtro"}
							size={"4.5rem"}
							id={"buttonReset"}
						/>
					</div>
					<PetList />
				</section>
			</StyledHome>
			<Footer />
			{/* {registerPetModal ? <RegisterPetModal /> : null} */}
			{petDetailsModal ? <PetDetailsModal /> : null}
			{/* {loginModal ? <LoginModal /> : null} */}
			{/* {adoptedModal ? <AdoptedModal /> : null} */}
		</>
	);
}
