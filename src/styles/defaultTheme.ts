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
    primary: "'Open sans', sans-serif",
    emphasis: "'Open sans', sans-serif",
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
    bold: 700,
  },
}