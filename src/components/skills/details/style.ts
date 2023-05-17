import { styled } from "styled-components";


export const StyledDetail = styled.div`
  background-color: ${props => props.theme.colors.background_contrast};
  padding: ${props => props.theme.spacing.medium};
  border-radius: ${props => props.theme.spacing.defaultBorderRadius};
  height: 300px;

  display: flex;
  flex-flow: column nowrap;
  gap: ${props => props.theme.spacing.small};

  h3 {
    font-size: ${props => props.theme.typography.size.largex};
    border-bottom: 3px solid ${props => props.theme.colors.background};
  }

`