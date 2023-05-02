import { Link } from "react-router-dom";
import { StyledForm } from "../style";
import { FormButton } from "../../Buttons/FormButton";
import { IconButton } from "../../Buttons/IconButton";
import { Input } from "../Input";
import Home from "../../../assets/Home.svg";
import Eye from "../../../assets/Eye.svg";

export function RegisterForm() {
  /* IMPORTS E LÓGICAS REFERENTES AO REGISTER FORM: ZOD, HOOK RESOLVER, USERCONTEXT, ETC */
  return (
    <StyledForm className="formContainer">
      <span className="formHeader">
        <h2>Registro</h2>
        <IconButton
          img={Home}
          alt="Botão da Homepage"
          size="3.125rem"
          button={false}
        />
      </span>
      <form
      /* onSubmit={REGISTER FUNCTION AQUI} */
      >
        <Input
          id="name"
          label="Nome"
          type="text"
          placeholder="Digite seu nome..."
          // error={errors.name?.message}
          // {...register('name')}
        />
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
        <Input
          id="confirm"
          label="Confirmar senha"
          type="password"
          placeholder="Confirme sua senha..."
          Eye={Eye}
          // error={errors.confirm?.message}
          // {...register('confirm')}
        />
        <FormButton text="Cadastre-se" />
      </form>
      <span className="formFooter">
        <p>Já tem uma conta?</p>
        <Link to="/login">Clique aqui para retornar ao login!</Link>
      </span>
    </StyledForm>
  );
}
