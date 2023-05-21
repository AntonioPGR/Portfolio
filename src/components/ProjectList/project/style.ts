import styled from "styled-components";

export const StyledProject = styled.article`
  overflow: hidden;
  max-width: 423px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  margin: auto;
  gap: ${props => props.theme.spacing.small};

  img{
    width: 100%;
    height: 150px;
    object-fit: cover;
  }

  h2{
    font-family: 'Open Sans', sans-serif;
    font-size: ${props => props.theme.typography.size.large};
    color: ${props => props.theme.colors.text};
  }

  p{
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3; /* number of lines to show */
            line-clamp: 3; 
    -webkit-box-orient: vertical;
  }
`
export const StyledFilterContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  gap: ${props => props.theme.spacing.small};
`