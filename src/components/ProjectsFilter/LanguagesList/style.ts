import styled from "styled-components";


export const StyledLanguagesList = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: ${props => props.theme.spacing.medium};
  max-width: 100%;
  overflow-x: scroll;

  &::-webkit-scrollbar{
    display: none;
  }
`