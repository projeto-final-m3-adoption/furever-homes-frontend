import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { Outlet } from "react-router-dom";
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
  textSearch: string;
  setTextSearch: React.Dispatch<React.SetStateAction<string>>;
  submitSearch: (event: React.FormEvent) => void;
  petsSearchFilter: IIPet[];
  setPetsSearchFilter: React.Dispatch<React.SetStateAction<IIPet[]>>;
  filterButtons: (icon: string) => void;
  adoptPet: (petId: number | string | undefined | null) => Promise<void>;
}

export const petContext = createContext({} as IIPetFull);

export function PetProvider() {
  const [petFull, setPetFull] = useState<IIPet[]>([]);
  const [textSearch, setTextSearch] = useState("");

  const [petsSearchFilter, setPetsSearchFilter] = useState<IIPet[]>([]);

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

  function submitSearch(event: React.FormEvent) {
    event.preventDefault();

    const petsFilter = petFull.filter(
      (pet) =>
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
    const petsFilter = petFull.filter((pet) =>
      pet.type.toLowerCase().includes(icon.toLowerCase())
    );
    setPetsSearchFilter(petsFilter);
  }

  const adoptPet = async (petId: number | string | undefined | null) => {
    let token = localStorage.getItem("@FHid");
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
    } catch (error) {
      console.log(error);
    }
  };

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
        adoptPet,
      }}
    >
      <Outlet />
    </petContext.Provider>
  );
}
