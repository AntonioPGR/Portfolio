import { TituloSessao } from "components/TituloSessao"
import { StyledContact } from "./style"
import { FormInput } from "components/Input"
import { Botao } from "components/Botao"
import { FormTextArea } from "./TextArea"
import { SocialMedia } from "./SocialMedia"
import { sendForm } from 'emailjs-com'
import { useRef, useState } from "react"
import env from "react-dotenv";


export const Contact = () => {

  const form = useRef<HTMLFormElement>(null)
  const [wasMessageSend, setWasMessageSend] = useState<boolean|null|undefined>(null) 

  const handleSubmit = (ev:React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault()

    setWasMessageSend(undefined)
    sendForm(env.SERVICE_ID, env.TEMPLATE_ID, form.current as HTMLFormElement, env.USER_ID)
    .then((result) => {
      setWasMessageSend(true)
    }, (error) => {
      setWasMessageSend(false)
    });

    setTimeout(() => {
      setWasMessageSend(null)
    }, 5000)

    form.current?.reset()
  }

  const renderInfoMessage = () => {
    if(wasMessageSend === null){
      return
    }
    if(wasMessageSend === undefined){
      return <p>Enviando sua mensagem...</p>
    }
    return (
      <p className={wasMessageSend? 'success':'warning'} >
        {wasMessageSend? 'Email enviado com sucesso!':'Erro ao enviar email!'}
      </p>
    )

  }

  return (
    <StyledContact id="contact">
      <TituloSessao position="Center">
        Contato
      </TituloSessao>
      <form ref={form} onSubmit={(ev) => handleSubmit(ev)} className="form">
        { renderInfoMessage() }
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