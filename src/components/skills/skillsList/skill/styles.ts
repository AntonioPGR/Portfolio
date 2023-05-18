import { styled } from "styled-components";


export const StyledSkill = styled.li<{selected?:boolean}>`

  height: 92px;
  width: 92px;
  margin: auto;
  box-sizing: border-box;
  padding: ${props => props.theme.spacing.medium};
  background-color: ${props => props.theme.colors.background_contrast};
  border-radius:  ${props => props.theme.spacing.defaultBorderRadius};
  cursor: pointer;
  
  ${
    props => props.selected && 'filter: brightness(.6);'
  }
  &:hover{
    filter: brightness(.8);
  }

  img{
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

`