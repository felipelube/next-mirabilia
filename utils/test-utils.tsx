import React, { FC, ReactElement } from "react"
import { render, RenderOptions } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import { defaultTheme } from "../styles/theme"

const AllTheProviders: FC = ({ children }) => {
  return <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
}

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from "@testing-library/react"
export { customRender as render }

export const shouldNotRenderWithoutEssentialProps = (
  Component: React.FC<any>,
  defaultProps: any,
  essentialProps: string[]
) => {
  essentialProps.forEach((essentialProp) => {
    const filteredProps = Object.entries(defaultProps).reduce(
      (obj: any, [key, value]) => {
        if (key !== essentialProp) {
          obj[key] = value
        }
        return obj
      },
      {}
    )
    const { container } = render(<Component {...filteredProps}></Component>, {})
    expect(container).toBeEmptyDOMElement()
  })
}
