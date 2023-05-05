import { useContext } from "react";
import {
	IRegisterNewPetFormData,
	petContext,
} from "../../../providers/petContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { registerPetFormSchema } from "./registerPetFormSchema";
import { Input } from "../Input";
import { StyledForm } from "../style";
import { IconButton } from "../../Buttons/IconButton";
import CloseIcon from "../../../assets/CloseIconWT.svg";
import { Select } from "../Select";
import { FormButton } from "../../Buttons/FormButton";
import { StyledTextareaContainer } from "./style";

export function RegisterNewPetForm() {
	const { createNewPet } = useContext(petContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IRegisterNewPetFormData>({
		resolver: zodResolver(registerPetFormSchema),
	});

	return (
		<StyledForm className="formContainer form-container-margin">
			<span className="formHeader">
				<h2>Cadastro Pet</h2>
				<IconButton
					img={CloseIcon}
					alt={"Fechar login"}
					size={"2.5rem"}
					button={true}
					id={"closeIcon"}
				/>
			</span>
			<form onSubmit={handleSubmit(createNewPet)}>
				<Input
					id="name"
					label="Nome do pet"
					type="text"
					placeholder="Digite o nome do pet aqui..."
					error={errors.name?.message}
					{...register("name")}
				/>
				<Select
					id="type"
					label="Tipo do pet"
					error={errors.type?.message}
					{...register("type")}
				/>
				<Select
					id="age"
					label="Idade do pet"
					error={errors.age?.message}
					{...register("age")}
				/>
				<Select
					id="gender"
					label="Sexo do pet"
					error={errors.gender?.message}
					{...register("gender")}
				/>
				<Select
					id="size"
					label="Tamanho do pet"
					error={errors.size?.message}
					{...register("size")}
				/>
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
				<StyledTextareaContainer className="textareaContainer">
					<label htmlFor="description" className="label">
						Conte mais sobre o seu pet aqui
					</label>
					<textarea
						className="regularInput"
						id="description"
						wrap="soft"
						placeholder="Nos dê bastante detalhes sobre seu pet aqui para conseguirmos achar uma nova casa para ele!"
						{...register("description")}
					/>
					<p className="inputError">{errors.description?.message}</p>
				</StyledTextareaContainer>
				<FormButton id="smallFormButton" text="Cadastrar pet para adoção" />
			</form>
		</StyledForm>
	);
}
