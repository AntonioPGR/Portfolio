import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.background_contrast};
  min-height: 60px;
  height: 10vh;
  padding: 0 ${props => props.theme.spacing.large};

  nav{
    display: flex;
    flex-flow: row nowrap;
    gap: ${props => props.theme.spacing.medium};
  }
`