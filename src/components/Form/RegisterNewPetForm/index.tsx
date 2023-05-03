import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerNewPetFormSchema } from "./registerNewPetFromSchema";
import {
  IRegisterNewPetFormData,
  petContext,
} from "../../../providers/petContext";
import { Input } from "../Input";
import { useContext } from "react";

export function RegisterNewPetForm() {
  const { createNewPet } = useContext(petContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterNewPetFormData>({
    resolver: zodResolver(registerNewPetFormSchema),
  });

  return (
    <form onSubmit={handleSubmit(createNewPet)}>
      <Input
        id="name"
        label="Nome"
        type="text"
        placeholder="Digite o nome do seu pet"
        error={errors.name?.message}
        {...register("name")}
      />
      <select id="type" {...register("type")}>
        <option value="Cachorro">Cachorro</option>
        <option value="Gato">Gato</option>
        <option value="Outros">Outros</option>
      </select>
      <select id="age" {...register("age")}>
        <option value="Filhote">Filhote</option>
        <option value="Adulto">Adulto</option>
        <option value="Idoso">Idoso</option>
      </select>
      <select id="gender" {...register("gender")}>
        <option value="Femêa">Femêa</option>
        <option value="Macho">Macho</option>
      </select>
      <select id="size" {...register("size")}>
        <option value="Pequeno">Pequeno</option>
        <option value="Médio">Médio</option>
        <option value="Grande">Grande</option>
      </select>
      <Input
        id="img"
        label="Imagem"
        type="url"
        placeholder="Coloque a url da imagem do seu pet"
        error={errors.img?.message}
        {...register("img")}
      />
      <Input
        id="description"
        label="Descrição"
        type="text"
        placeholder="fale sobre o seu pet"
        error={errors.description?.message}
        {...register("description")}
      />
      <Input
        id="address"
        label="Endereço"
        type="text"
        placeholder="Digite o endereço que este pet pode ser encontrado"
        error={errors.address?.message}
        {...register("address")}
      />
      <button type="submit">Cadastrar Pet</button>
    </form>
  );
}
