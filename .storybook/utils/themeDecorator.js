import React from "react"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "../../styles/theme"
import { GlobalStyle } from "../../styles/global"

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={defaultTheme}>
    <GlobalStyle />
    {storyFn()}
  </ThemeProvider>
)

export default ThemeDecorator
