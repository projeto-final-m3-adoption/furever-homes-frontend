import { StyledFormButton } from "./style";

export interface IFormButtonProps {
  text: string;
}

export function FormButton({ text }: IFormButtonProps) {
  return <StyledFormButton>{text}</StyledFormButton>;
}
