import styled from "styled-components";


export const StyledFiltroTag = styled.div`
  background: ${props=>props.theme.colors.background_contrast};
  border-radius: ${props=>props.theme.spacing.defaultBorderRadius};
  text-align: center;
  padding: ${props => props.theme.spacing.small} ${props => props.theme.spacing.medium};
  font-size: ${props => props.theme.typography.size.small};
  text-transform: uppercase;
  color: ${props=>props.theme.colors.action};
`