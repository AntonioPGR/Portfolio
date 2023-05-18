import { StyledLabel, StyledTextAreaContainer} from "./style"

export interface PropsFormInput {
  label?: string,
  placeholder?: string,
  name: string,
}

export const FormTextArea = ({label, placeholder, name}:PropsFormInput) => {

  return (
    <div>
      <StyledLabel htmlFor={label}> {label} </StyledLabel>
      <StyledTextAreaContainer>
        <textarea placeholder={placeholder} name={name} />
      </StyledTextAreaContainer>
    </div>
  )

}