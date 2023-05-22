import { styled } from "styled-components";


export const StyledDetail = styled.div`
  background-color: ${props => props.theme.colors.background_contrast};
  padding: ${props => props.theme.spacing.medium};
  border-radius: ${props => props.theme.spacing.defaultBorderRadius};

  box-sizing: border-box;
  min-height: 200px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-flow: column nowrap;
  gap: ${props => props.theme.spacing.small};

  h3 {
    font-size: ${props => props.theme.typography.size.largex};
    border-bottom: 3px solid ${props => props.theme.colors.background};
    margin-bottom: ${props => props.theme.spacing.small};
    font-weight: 600;
  }
`