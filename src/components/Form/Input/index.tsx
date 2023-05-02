import { useState } from "react";
import { forwardRef } from "react";
import { StyledInputContainer } from "./style";

function InputComponent({ id, label, error, Eye, ...rest }, ref) {
	const [visiblePassword, setVisiblePassword] = useState(false);

	return (
		<StyledInputContainer className="inputContainer">
			<label className="label" htmlFor={id}>
				{label}
			</label>
			{Eye ? (
				<div className="passwordInput">
					<input id={id} ref={ref} {...rest} type={visiblePassword ? "text" : "password"} />
					<img
						src={Eye}
						alt="Visualizar senha"
						onClick={() => {
							setVisiblePassword(!visiblePassword);
						}}
					/>
				</div>
			) : (
				<input className="regularInput" id={id} ref={ref} {...rest} />
			)}
			{error ? <p className="inputError">{error}</p> : null}
		</StyledInputContainer>
	);
}
export const Input = forwardRef(InputComponent);
