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

export function Home() {
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
		</>
	);
}
