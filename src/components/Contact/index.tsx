import { TituloSessao } from "components/TituloSessao"
import { StyledContact } from "./style"
import { FormInput } from "./Input"
import { Botao } from "components/Botao"


export const Contact = () => {
  return (
    <StyledContact>
      <TituloSessao position="Center">
        Contato
      </TituloSessao>

      <form className="form">
        <FormInput label="Email" type="email" />
        <div className="form__line">
          <FormInput label="Nome" type="text" />
          <FormInput label="Telefone" type="tel" />
        </div>
        <FormInput label="Mensagem" type="text" largeHeight={true} />

        <div className="botao__container">
          <Botao> Enviar </Botao>
        </div>

      </form>
    </StyledContact>
  )
}