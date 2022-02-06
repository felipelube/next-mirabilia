import React from "react"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "../../styles/theme"

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={defaultTheme}>{storyFn()}</ThemeProvider>
)

export default ThemeDecorator
