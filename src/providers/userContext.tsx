import { createContext, useEffect, useState } from "react";
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
  logIn: SubmitHandler<ILoginFormData>;
  logOut: () => void;
  loginModal: boolean;
  setLoginModal: React.Dispatch<React.SetStateAction<boolean>>;
  closeLoginModal: () => void;
  logInModal: (formData: ILoginFormData) => Promise<void>;
  tokenId: number;
  token: string;
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

export interface ILoginFormData {
  email: string;
  password: string;
}

export const UserContext = createContext({} as IUserContext);

export function UserProvider({ children }: IChildren) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [loginModal, setLoginModal] = useState(false);
  const tokenId = Number(localStorage.getItem("@FHid"));
  const token = localStorage.getItem("@FHtoken");

  const createUser: SubmitHandler<IRegisterFormData> = async (formData) => {
    delete formData.confirm;

    try {
      await api.post("/register", formData);
      navigate("/login");
      toast.success("Conta criada com sucesso");
    } catch (error) {
      const currentError = error as AxiosError<string>;
      toast.error(currentError.response?.data);
    }
  };

  useEffect(() => {
    const locationUrl = location.pathname;
    if (token && (locationUrl === "/register" || locationUrl === "/login")) {
      navigate("/home");
    }
  }, []);

  const logIn = async (formData: ILoginFormData) => {
    try {
      const response = await api.post("/login", formData);
      if (response.data.accessToken) {
        api.defaults.headers.common.authorization = `Bearer ${response.data.accessToken}`;
        setUser(response.data.user);
        localStorage.setItem(
          "@FHtoken",
          JSON.stringify(response.data.accessToken)
        );
        localStorage.setItem("@FHid", JSON.stringify(response.data.user.id));
        toast.success("Usuário logado com sucesso");
        navigate("/");
      }
      if (loginModal) {
        setLoginModal(false);
      }
    } catch (error) {
      const currentError = error as AxiosError<string>;
      toast.error(currentError.response?.data);
    }
  };

  const logInModal = async (formData: ILoginFormData) => {
    try {
      const response = await api.post("/login", formData);
      if (response.data.accessToken) {
        api.defaults.headers.common.authorization = `Bearer ${response.data.accessToken}`;
        setUser(response.data.user);
        localStorage.setItem(
          "@FHtoken",
          JSON.stringify(response.data.accessToken)
        );
        localStorage.setItem("@FHid", JSON.stringify(response.data.user.id));
        toast.success("Usuário logado com sucesso");
      }
      if (loginModal) {
        setLoginModal(false);
      }
    } catch (error) {
      const currentError = error as AxiosError<string>;
      toast.error(currentError.response?.data);
    }
  };

  const logOut = () => {
    localStorage.removeItem("@FHtoken");
    localStorage.removeItem("@FHid");
    setUser(null);
    toast.success("Deslogado com sucesso");
    navigate("/");
  };

  const closeLoginModal = () => setLoginModal(false);

  return (
    <UserContext.Provider
      value={{
        createUser,
        logIn,
        logOut,
        user,
        setUser,
        loginModal,
        setLoginModal,
        closeLoginModal,
        logInModal,
        tokenId,
        token,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
