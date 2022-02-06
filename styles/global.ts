import { createGlobalStyle } from "styled-components"
import "@fontsource/gentium-basic"
import "./reset.css"

export const GlobalStyle = createGlobalStyle`

  body {
    font-family: ${({ theme }) => theme.fonts.body};
  }
`
