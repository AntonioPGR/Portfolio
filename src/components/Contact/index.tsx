import { TituloSessao } from "components/TituloSessao"
import { StyledContact } from "./style"
import { FormInput } from "./Input"
import { Botao } from "components/Botao"
import { FormTextArea } from "./TextArea"
import { SocialMedia } from "./SocialMedia"
import { sendForm } from 'emailjs-com'
import { useRef, useState } from "react"


export const Contact = () => {

  const SERVICE_ID = 'service_19qupfj'
  const TEMPLATE_ID = 'template_bjsutmh'
  const USER_ID = '7WF2j6knCp3rvTL4M'

  const form = useRef<HTMLFormElement>(null)
  const [wasMessageSend, setWasMessageSend] = useState<boolean|null>(null) 

  const handleSubmit = (ev:React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()
    
    sendForm(SERVICE_ID, TEMPLATE_ID, form.current as HTMLFormElement, USER_ID)
      .then((result) => {
        setWasMessageSend(true)
      }, (error) => {
        setWasMessageSend(false)
      });

    form.current?.reset()
  }

  return (
    <StyledContact>
      <TituloSessao position="Center">
        Contato
      </TituloSessao>

      <form ref={form} onSubmit={(ev) => handleSubmit(ev)} className="form">
        {
          wasMessageSend != null &&
          <p className={wasMessageSend? 'success':'warning'} >
            {wasMessageSend? 'Email enviado com sucesso!':'Erro ao enviar email!'}
          </p>
        }
        <FormInput name="user_email" label="Email" type="email" caption="antoninhopgr@gmail.com" />
        <div className="form__line">
          <FormInput name="user_name" label="Nome" type="text" caption="Antonio Pacheco" />
          <FormInput name="user_cellphone" label="Telefone" type="tel" caption="11912345678" />
        </div>
        <FormTextArea name="user_message" label="Mensagem"  />

        <div className="botao__container">
          <Botao> Enviar </Botao>
        </div>

        <SocialMedia />
      </form>
    </StyledContact>
  )
}