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
}
export const petContext = createContext({} as IIPetFull);

export function PetProvider() {
  async function loadPets() {
    try {
      const response = await api.get("/pet");
      setPetFull(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  const [petFull, setPetFull] = useState<IIPet[]>([]);
  useEffect(() => {
    loadPets();
  }, []);

  return (
    <petContext.Provider value={{ petFull, setPetFull, loadPets }}>
      <Outlet />
    </petContext.Provider>
  );
}
