import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface IIChildren {
  children: React.ReactNode;
}

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

export function PetProvider({ children }: IIChildren) {
  async function loadPets() {
    try {
      const response = await api.get("/pet");
      setPetFull(response.data);
    } catch (error) {
      console.log("deu erro");
    }
  }
  const [petFull, setPetFull] = useState<IIPet[]>([]);
  useEffect(() => {
    loadPets();
  }, []);

  return <petContext.Provider value={{ petFull, setPetFull, loadPets }}>{children}</petContext.Provider>;
}
