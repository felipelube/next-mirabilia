import { createGlobalStyle } from "styled-components"
import "@fontsource/gentium-basic"

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fonts.body};
  }
`
