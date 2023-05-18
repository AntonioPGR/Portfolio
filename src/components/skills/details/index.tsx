import { StateCurrentSkill } from "../states/currentSkill"
import { StyledDetail } from "./style"
import {useRecoilValue} from 'recoil'


export const Details = () => {
  const language = useRecoilValue(StateCurrentSkill)

  return (
    <StyledDetail>
      <h3> {language.nome} </h3>
      <p> {language.descricao} </p>
      <p> Tive meu primeiro contato em {language.inicio_estudo} </p>
    </StyledDetail>
  )
}