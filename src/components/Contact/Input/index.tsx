import { StyledLabel, StyledInputContainer} from "./style"
import { HTMLInputTypeAttribute } from "react";

export interface PropsFormInput {
  type?: HTMLInputTypeAttribute,
  icon?: string,
  label?: string,
  placeholder?: string,
  largeHeight?: boolean
}

export const FormInput = ({icon, label, placeholder, type, largeHeight}:PropsFormInput) => {

  return (
    <div>
      <StyledLabel htmlFor={label}> {label} </StyledLabel>
      <StyledInputContainer icon={icon} largeHeight={largeHeight}>
        {
          icon &&
          <i><img src={icon} alt={`Icone de ${icon}`} /></i>
        }
        <input type={type || 'text'} placeholder={placeholder} name={label} />
      </StyledInputContainer>
    </div>
  )

}