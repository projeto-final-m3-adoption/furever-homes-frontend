import { Link } from "react-router-dom";
import { StyledForm } from "../style";
import { FormButton } from "../../Buttons/FormButton";
import { IconButton } from "../../Buttons/IconButton";
import { Input } from "../Input";
import Home from "../../../assets/Home.svg";
import Eye from "../../../assets/Eye.svg";

export function LoginForm() {
  /* IMPORTS E LÓGICAS REFERENTES AO LOGIN FORM: ZOD, HOOK RESOLVER, USERCONTEXT, ETC */
  return (
    <StyledForm className="formContainer">
      <span className="formHeader">
        <h2>Login</h2>
        <IconButton
          img={Home}
          alt="Botão da Homepage"
          size="3.125rem"
          button={false}
        />
      </span>
      <form
      /* onSubmit={LOGIN FUNCTION AQUI} */
      >
        <Input
          id="email"
          label="E-mail"
          type="text"
          placeholder="Digite seu e-mail..."
          // error={errors.email?.message}
          // {...register('email')}
        />
        <Input
          id="password"
          label="Senha"
          type="password"
          placeholder="Digite sua senha..."
          Eye={Eye}
          // error={errors.password?.message}
          // {...register('password')}
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
