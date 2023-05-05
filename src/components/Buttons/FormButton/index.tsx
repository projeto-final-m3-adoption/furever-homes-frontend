import { StyledFormButton } from "./style";

export interface IFormButtonProps {
  text: string;
  id?: string;
  customClass?: string;
}

export function FormButton({ text, id, customClass }: IFormButtonProps) {
  return (
    <StyledFormButton id={id}>
      <span className={customClass}>{text}</span>
    </StyledFormButton>
  );
}
