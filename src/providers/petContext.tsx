import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { Outlet } from "react-router-dom";
import { SubmitHandler } from "react-hook-form";

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
  adoptPet: (
    formData: IIPet,
    petId: number | string | undefined | null
  ) => Promise<void>;
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

  const createNewPet: SubmitHandler<IRegisterNewPetFormData> = async (
    formData
  ) => {
    const userId = Number(localStorage.getItem("@FUREVERHOMES@ID"));
    const newFormData = { ...formData, isAdopted: false, userId: userId };

    try {
      await api.post("/pet", newFormData);
      loadPets();
    } catch (error) {
      console.log(error);
    }
  };

  const adoptPet = async (
    formData: IIPet,
    petId: number | string | undefined | null
  ) => {
    let token = localStorage.getItem("@FUREVERHOMES@TOKEN");
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
      value={{ petFull, setPetFull, loadPets, createNewPet, adoptPet }}
    >
      <Outlet />
    </petContext.Provider>
  );
}
