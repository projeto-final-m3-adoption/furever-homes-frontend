import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { Outlet } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";

export interface IIPet {
	name: string;
	type: string;
	age: string;
	gender: string;
	size: string;
	img: string;
	description: string;
	adress: string;
	isAdopted: boolean;
	userId: any;
	id: any;
}

interface IIPetFull {
	petFull: IIPet[];
	setPetFull: React.Dispatch<React.SetStateAction<IIPet[]>>;
	loadPets: () => void;
	createNewPet: SubmitHandler<IRegisterNewPetFormData>;

	textSearch: string;
	setTextSearch: React.Dispatch<React.SetStateAction<string>>;
	submitSearch: (event: React.FormEvent) => void;
	petsSearchFilter: IIPet[];
	setPetsSearchFilter: React.Dispatch<React.SetStateAction<IIPet[]>>;
	filterButtons: (icon: string) => void;
	openModalNewPet: boolean;
	setOpenModalNewPet: React.Dispatch<React.SetStateAction<boolean>>;
	adoptPet: (petId: number | string | undefined | null) => Promise<void>;
	petObject: IIPet | null | undefined;
	setPetObject: React.Dispatch<React.SetStateAction<IIPet | null | undefined>>;
	petDetailsModal: boolean;
	setPetDetailsModal: React.Dispatch<React.SetStateAction<boolean>>;
	closePetDetailsModal(): void;
	adoptedModal: boolean;
}

export interface IRegisterNewPetFormData {
	name: string;
	type: string;
	age: string;
	gender: string;
	size: string;
	img: string;
	description: string;
	address: string;
	isAdopted?: boolean;
	userId?: number;
	id?: number;
}

export interface IAdoptPet {
	formData: IIPet;
	userId: string | undefined | null | number;
}

export const petContext = createContext({} as IIPetFull);

export function PetProvider() {
	const [petFull, setPetFull] = useState<IIPet[]>([]);
	const [textSearch, setTextSearch] = useState("");
	const [petsSearchFilter, setPetsSearchFilter] = useState<IIPet[]>([]);
	const [openModalNewPet, setOpenModalNewPet] = useState(false);
	const [petDetailsModal, setPetDetailsModal] = useState(false);
	const [petObject, setPetObject] = useState<IIPet | null>();
	const [adoptedModal, setAdoptedModal] = useState(false);

	async function loadPets() {
		try {
			const response = await api.get("/pet");
			setPetFull(response.data);
		} catch (error) {
			console.log(error);
		}
	}

	useEffect(() => {
		loadPets();
	}, []);

	const createNewPet: SubmitHandler<
		IRegisterNewPetFormData
	> = async formData => {
		const userId = Number(localStorage.getItem("@FUREVERHOMES@ID"));
		const newFormData = { ...formData, isAdopted: false, userId: userId };

		try {
			await api.post("/pet", newFormData);
			loadPets();
		} catch (error) {
			console.log(error);
		}
	};

	function submitSearch(event: React.FormEvent) {
		event.preventDefault();

		const petsFilter = petFull.filter(
			pet =>
				pet.name.toLowerCase().includes(textSearch.toLowerCase()) ||
				pet.age.toLowerCase().includes(textSearch.toLowerCase())
		);

		petsFilter.length === 0
			? toast.error("Nenhum pet encontrado")
			: setPetsSearchFilter(petsFilter);
		petsFilter.length === 0
			? setPetsSearchFilter(petFull)
			: setPetsSearchFilter(petsFilter);
		setTextSearch("");
	}

	function filterButtons(icon: string) {
		const petsFilter = petFull.filter(pet =>
			pet.type.toLowerCase().includes(icon.toLowerCase())
		);
		setPetsSearchFilter(petsFilter);
	}

	function closePetDetailsModal() {
		setPetDetailsModal(false);
		setPetObject(null);
	}

	function openAdoptedModal() {
		setAdoptedModal(true);
		setTimeout(() => setAdoptedModal(false), 10000);
	}

	async function adoptPet(petId: number | string | undefined | null) {
		let token = localStorage.getItem("@FHtoken");
		if (token) {
			token = JSON.parse(token);
		}
		try {
			await api.patch(
				`/pet/${petId}`,
				{
					isAdopted: true,
				},
				{
					headers: {
						Authorization: `Bearer ${token}`,
					},
				}
			);
			closePetDetailsModal();
			openAdoptedModal();
			loadPets();
		} catch (error) {
			console.log(error);
		}
	}

	return (
		<petContext.Provider
			value={{
				petFull,
				setPetFull,
				loadPets,
				textSearch,
				setTextSearch,
				submitSearch,
				petsSearchFilter,
				setPetsSearchFilter,
				filterButtons,
				createNewPet,
				openModalNewPet,
				setOpenModalNewPet,
				adoptPet,
				petObject,
				setPetObject,
				petDetailsModal,
				setPetDetailsModal,
				closePetDetailsModal,
				adoptedModal,
			}}>
			<Outlet />
		</petContext.Provider>
	);
}
