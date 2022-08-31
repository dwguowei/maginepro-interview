import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text.main};
    font-family: ProximaNova, Helvetica, sans-serif;
  }
  `
