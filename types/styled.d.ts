import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      redAccent: string
      goldenBorder: string
      blackText: string
      blackFadedText: string
      blackFadedText2: string
      black: string
      linkHoverBlue: string
      boxHoverBlue: string
      boxBackground: string
      grayBackground: string
    }
    fonts: {
      body: string
    }
    fontWeight: {
      bold: number
      regular: number
    }
    fontSize: {
      xxxs: number
      xxs: number
      xs: number
      sm: number
      normal: number
      md: number
      lg: number
    }
    lineHeight: {
      md: number
      sm: number
    }
    spacing: {
      xs: number
      sm: number
      lg: number
      xl: number
    }
    zIndexes: {
      max: number
    }
  }
}
