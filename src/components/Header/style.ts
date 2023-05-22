import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 90px;
  padding: 0 ${props => props.theme.spacing.large};

  background-color: ${props => props.theme.colors.background_contrast};

  .content{
    max-width: 1414px;
    max-height: 100%;
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: auto;
  }
`