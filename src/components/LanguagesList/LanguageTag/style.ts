import styled from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";


export interface PropsStyledLanguageTag {
  $selectable: boolean,
  selected: boolean
}

const getSelectableStyle = (theme: DefaultTheme ,selected?:boolean) => {
  return `
    color: ${theme.colors.action};
    cursor: pointer;
    ${selected? ` filter: brightness(.9); `: ` &:hover{ filter: brightness(.9); } `}
  `
}

const getUnselectableStyle = (theme: DefaultTheme) => {
  return `
    color: ${theme.colors.text};
  `
}

export const StyledLanguageTag = styled.div<PropsStyledLanguageTag>`
  border-radius: ${props=> props.theme.spacing.defaultBorderRadius};
  text-align: center;
  padding: ${props => `${props.theme.spacing.small} ${props.theme.spacing.medium}`};
  font-size: ${props => props.theme.typography.size.small };
  text-transform: uppercase;
  background: ${props=> props.theme.colors.background_contrast};

  ${props => props.$selectable? getSelectableStyle(props.theme, props.selected) : getUnselectableStyle(props.theme)}

`