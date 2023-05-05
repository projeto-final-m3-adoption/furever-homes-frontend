import { StyledFormButton } from "./style";

export interface IFormButtonProps {
	text: string;
	id?: string;
}

export function FormButton({ text, id }: IFormButtonProps) {
	return (
		<StyledFormButton id={id} className="regularButton">
			{text}
		</StyledFormButton>
	);
}
