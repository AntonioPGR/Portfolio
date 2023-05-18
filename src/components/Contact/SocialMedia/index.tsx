import { data_socialMedia } from "data/socialMedia"
import { StyledSocialMedia } from "./style"


export const SocialMedia = () => {

  return (
    <StyledSocialMedia>
      {
        data_socialMedia.map((item) => {
          return (
            <a href={item.link} key={item.id} target="_blank" rel="noreferrer">
              <img src={item.icone} alt={item.nome} />
            </a>
          )
        })
      }
    </StyledSocialMedia>
  )

}