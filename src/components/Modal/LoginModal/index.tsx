import { Link } from "react-router-dom";
import { StyledForm } from "../../Form/style";
import { FormButton } from "../../Buttons/FormButton";
import { Input } from "../../Form/Input";
import Eye from "../../../assets/Eye.svg";
import { useContext } from "react";
import { ILoginFormData, UserContext } from "../../../providers/userContext";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../Form/LoginForm/loginFormSchema";

export function LoginModal() {
	const { logIn } = useContext(UserContext);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<ILoginFormData>({
		resolver: zodResolver(loginSchema),
	});

	return (
		<StyledForm className="formContainer">
			<span className="formHeader">
				<h2>Login</h2>
			</span>
			<form onSubmit={handleSubmit(logIn)}>
				<Input
					id="email"
					label="E-mail"
					type="text"
					placeholder="Digite seu e-mail..."
					{...register("email")}
					error={errors.email?.message}
				/>
				<Input
					id="password"
					label="Senha"
					type="password"
					placeholder="Digite sua senha..."
					Eye={Eye}
					{...register("password")}
					error={errors.password?.message}
				/>
				<FormButton text="Login" />
			</form>
			<span className="formFooter">
				<p>Ainda não tem conta?</p>
				<Link to="/register">Cadastre-se aqui!</Link>
			</span>
		</StyledForm>
	);
}
