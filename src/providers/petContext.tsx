import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { Outlet } from "react-router-dom";

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
  petsFilter: IIPet[];
  submitSearch: (event: React.FormEvent) => void;
  petsSearch: string;
  setPetsSearch: React.Dispatch<React.SetStateAction<string>>;
}
export const petContext = createContext({} as IIPetFull);

export function PetProvider() {
  const [petFull, setPetFull] = useState<IIPet[]>([]);
  const [textSearch, setTextSearch] = useState("");
  const [petsSearch, setPetsSearch] = useState("");

  const petsFilter = petFull.filter(
    (pet) =>
      pet.name.toLowerCase().includes(petsSearch.toLowerCase()) ||
      pet.age.toLowerCase().includes(petsSearch.toLowerCase())
  );

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
    setPetsSearch(textSearch);
    setTextSearch("");
    console.log(petsSearch);
  }

  return (
    <petContext.Provider
      value={{
        petFull,
        setPetFull,
        loadPets,
        textSearch,
        setTextSearch,
        petsFilter,
        submitSearch,
        petsSearch,
        setPetsSearch,
      }}
    >
      <Outlet />
    </petContext.Provider>
  );
}
