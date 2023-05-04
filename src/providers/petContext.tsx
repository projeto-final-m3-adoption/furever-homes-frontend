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
  userId: number;
  id: number;
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

export const petContext = createContext({} as IIPetFull);

export function PetProvider() {
  const [petFull, setPetFull] = useState<IIPet[]>([]);
  const [textSearch, setTextSearch] = useState("");
  const [petsSearchFilter, setPetsSearchFilter] = useState<IIPet[]>([]);
  const [openModalNewPet, setOpenModalNewPet] = useState(false);

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

  const createNewPet: SubmitHandler<IRegisterNewPetFormData> = async (formData) => {
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
      (pet) =>
        pet.name.toLowerCase().includes(textSearch.toLowerCase()) ||
        pet.age.toLowerCase().includes(textSearch.toLowerCase())
    );

    petsFilter.length === 0 ? toast.error("Nenhum pet encontrado") : setPetsSearchFilter(petsFilter);
    petsFilter.length === 0 ? setPetsSearchFilter(petFull) : setPetsSearchFilter(petsFilter);
    setTextSearch("");
  }

  function filterButtons(icon: string) {
    const petsFilter = petFull.filter((pet) => pet.type.toLowerCase().includes(icon.toLowerCase()));
    setPetsSearchFilter(petsFilter);
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
      }}
    >
      <Outlet />
    </petContext.Provider>
  );
}
