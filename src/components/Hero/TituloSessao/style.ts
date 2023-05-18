import styled from "styled-components";

const getItemsAligniment = (position:TPosition) => {
  switch(position){
    case "Center":
      return "center";
    case "Left":
      return "flex-start";
    case "Right":
      return "flex-end";
  }
}


const getTextAligniment = (position:TPosition) => {
  switch(position){
    case "Center":
      return "center";
    case "Left":
      return "left";
    case "Right":
      return "right";
  }
}

export const StyledTituloSessao = styled.div<{position:TPosition}>`

width: 100%;
display: flex;
justify-content: ${props => getItemsAligniment(props.position)};
align-items: center;

h2{
    padding: 8px 24px;
    width: ${props => props.position === 'Center'? '100%' : '75%'};
    background: ${props=>props.theme.colors.background_contrast};
    font-size: ${props => props.theme.typography.size.titles};
    color: ${props => props.theme.colors.text};
    text-align: ${props => getTextAligniment(props.position)};
  }
`