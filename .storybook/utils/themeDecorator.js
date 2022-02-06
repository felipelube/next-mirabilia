import React from "react"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "../../styles/theme"
import { GlobalStyle } from "../../styles/global"
import { CSSReset } from "../../styles/reset"

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={defaultTheme}>
    <CSSReset />
    <GlobalStyle />
    {storyFn()}
  </ThemeProvider>
)

export default ThemeDecorator
