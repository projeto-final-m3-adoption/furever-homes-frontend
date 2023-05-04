import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerNewPetFormSchema } from "./registerNewPetFromSchema";
import { IRegisterNewPetFormData, petContext } from "../../../providers/petContext";
import { Input } from "../../Form/Input";
import { useContext } from "react";
import { StyleModalNewPet } from "./style";

export function RegisterNewPetForm() {
  const { createNewPet, openModalNewPet, setOpenModalNewPet } = useContext(petContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterNewPetFormData>({
    resolver: zodResolver(registerNewPetFormSchema),
  });

  return openModalNewPet === true ? (
    <StyleModalNewPet role="dialog" className="modalNewPet">
      <form onSubmit={handleSubmit(createNewPet)}>
        <div className="headerModal">
          <h2>Cadastro Pet</h2>
          <button onClick={() => setOpenModalNewPet(false)}>X</button>
        </div>
        <Input
          id="name"
          label="Nome do pet"
          type="text"
          placeholder="Digite o nome do pet aqui..."
          error={errors.name?.message}
          {...register("name")}
        />
        <label htmlFor="type">Tipo do pet</label>
        <select id="type" {...register("type")} className="selectNewPet">
          <option value="">Escolha o tipo de pet aqui...</option>
          <option value="Cachorro">Cachorro</option>
          <option value="Gato">Gato</option>
          <option value="Outros">Outros</option>
        </select>
        <label htmlFor="age">Idade do pet</label>
        <select id="age" {...register("age")} className="selectNewPet">
          <option value="">Escolha a faixa etária do pet aqui...</option>
          <option value="Filhote">Filhote</option>
          <option value="Adulto">Adulto</option>
          <option value="Idoso">Idoso</option>
        </select>
        <label htmlFor="gender">Sexo do pet</label>
        <select id="gender" {...register("gender")} className="selectNewPet">
          <option value="">Escolha o sexo do pet aqui...</option>
          <option value="Femêa">Femêa</option>
          <option value="Macho">Macho</option>
        </select>
        <label htmlFor="size">Tamanho do pet</label>
        <select id="size" {...register("size")} className="selectNewPet">
          <option value="">Escolha o tamanho do pet aqui...</option>
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
          id="address"
          label="Endereço do pet"
          type="text"
          placeholder="Digite aqui o endereço do pet..."
          error={errors.address?.message}
          {...register("address")}
        />
        <Input
          id="description"
          label="Conte mais sobre o seu pet aqui"
          type="text"
          placeholder="Nos dê bastante detalhes sobre seu pet aqui para conseguirmos achar uma nova casa para ele!"
          error={errors.description?.message}
          {...register("description")}
        />
        <button type="submit" className="buttonNewPet">
          Arranjar uma nova família para o pet
        </button>
      </form>
    </StyleModalNewPet>
  ) : null;
}
