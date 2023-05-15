import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme.colors.background_contrast};
  min-height: 60px;
  max-height: 120px;
  height: 10vh;
  padding: 0 ${props => props.theme.spacing.large};

  .content{
    max-width: 1414px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
  }

  nav{
    display: flex;
    flex-flow: row nowrap;
    gap: ${props => props.theme.spacing.medium};
  }
`