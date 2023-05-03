import { createContext, useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { api } from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

export interface IChildren {
  children: React.ReactNode;
}

export interface IUserContext {
  user: null | IUser;
  setUser: React.Dispatch<React.SetStateAction<null>>;
  createUser: SubmitHandler<IRegisterFormData>;
}

export interface IUser {
  confirm: string;
  email: string;
  id: number;
  name: string;
}

export interface IRegisterFormData {
  name: string;
  email: string;
  password: string;
  confirm?: string;
}

export const UserContext = createContext({} as IUserContext);

export function UserProvider({ children }: IChildren) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const createUser: SubmitHandler<IRegisterFormData> = async (formData) => {
    delete formData.confirm;

    try {
      const response = await api.post("/register", formData);
      setUser(response.data.user);
      localStorage.setItem("@FUREVERHOMES@TOKEN", response.data.accessToken);
      localStorage.setItem("@FUREVERHOMES@ID", response.data.user.id);
      navigate("/login");
      toast.success("Conta criada com sucesso");
    } catch (error) {
      const currentError = error as AxiosError<string>;
      toast.error(currentError.response?.data);
    }
  };
  return (
    <UserContext.Provider value={{ createUser, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
