import { DefaultTheme } from "styled-components/dist/types";

export const defaultTheme : DefaultTheme = {
  colors: {
    action: "#52CBD9",
    background: "#0C293C",
    background_contrast: "#1B587D",
    text: "#EEEEEE",
    text_contrast: "#BBB"
  },
  typography:{
    primary: "'Roboto Slab', serif",
    emphasis: "'Roboto Slab', serif;",
    size: {
      small: '16px',
      default: '24px',
      large: '32px',
      largex: '40px',
      titles: '56px',
      headings: '156px'
    },
  },
  spacing:{
    small: '8px',
    medium: '16px',
    large: '24px',
    defaultBorderRadius: '8px',
    largeBorderRadius: '16px',
  },
  weight: {
    regular: 400,
    bold: 600,
  },
  breakpoints: {
    small_cellphohe: '320px',
    large_cellphone: '414px',
    tablet: '768px',
    laptop: '1024px'
  }
}