import { StyledCaption } from "../Contact/style/styledFormField";
import { StyledLabel, StyledInputContainer} from "./style"
import { HTMLInputTypeAttribute } from "react";

export interface PropsFormInput {
  type?: HTMLInputTypeAttribute,
  icon?: string,
  label?: string,
  placeholder?: string,
  caption?:string,
  name?: string,
  onChange?: (ev:React.ChangeEvent<HTMLInputElement>) => void
}

export const FormInput = ({icon, label, placeholder, type, caption, name, onChange}:PropsFormInput) => {

  return (
    <div>
      {
        label &&
        <StyledLabel htmlFor={label}> {label} </StyledLabel>
      }
      <StyledInputContainer icon={icon}>
        {
          icon &&
          <i><img src={icon} alt={`Icone de ${icon}`} /></i>
        }
        <input onChange={(ev) => onChange? onChange(ev): ""} type={type || 'text'} placeholder={placeholder} name={name} />
      </StyledInputContainer>
      {
        caption &&
        <StyledCaption className="caption">Ex: {caption} </StyledCaption>
      }
    </div>
  )

}