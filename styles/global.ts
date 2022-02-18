import { createGlobalStyle } from "styled-components"
import "@fontsource/gentium-basic"

export const GlobalStyle = createGlobalStyle`
  :root {
    --color-red-accent: ${({ theme }) => theme.colors.redAccent};
    --color-golden-border: ${({ theme }) => theme.colors.goldenBorder};
    --color-black-text: ${({ theme }) => theme.colors.blackText};
    --color-black-faded-text: ${({ theme }) => theme.colors.blackFadedText};
    --color-black-faded-text2: ${({ theme }) => theme.colors.blackFadedText2};
    --color-black: ${({ theme }) => theme.colors.black};
    --color-link-hover-blue: ${({ theme }) => theme.colors.linkHoverBlue};
    --color-box-hover-blue: ${({ theme }) => theme.colors.boxHoverBlue};
    --color-box-background: ${({ theme }) => theme.colors.boxBackground};
    --color-gray-background: ${({ theme }) => theme.colors.grayBackground};
    --color-baby-blue: ${({ theme }) => theme.colors.babyBlue};
    --color-gray: ${({ theme }) => theme.colors.gray};

    --font-family-body: ${({ theme }) => theme.fonts.body};

    --font-weight-bold: ${({ theme }) => theme.fontWeight.bold};
    --font-weight-regular: ${({ theme }) => theme.fontWeight.regular};

    --font-weight-bold: ${({ theme }) => theme.fontWeight.bold};
    --font-weight-regular: ${({ theme }) => theme.fontWeight.regular};

    --font-size-xxxs: ${({ theme }) => theme.fontSize.xxxs}px;
    --font-size-xxs: ${({ theme }) => theme.fontSize.xxs}px;
    --font-size-xs: ${({ theme }) => theme.fontSize.xs}px;
    --font-size-sm: ${({ theme }) => theme.fontSize.sm}px;
    --font-size-normal: ${({ theme }) => theme.fontSize.normal}px;
    --font-size-md: ${({ theme }) => theme.fontSize.md}px;
    --font-size-lg: ${({ theme }) => theme.fontSize.lg}px;


    --line-height-md: ${({ theme }) => theme.lineHeight.md}px;
    --line-height-sm: ${({ theme }) => theme.lineHeight.sm}px;

    --spacing-xs: ${({ theme }) => theme.spacing.xs}px;
    --spacing-sm: ${({ theme }) => theme.spacing.sm}px;
    --spacing-lg: ${({ theme }) => theme.spacing.lg}px;
    --spacing-xl: ${({ theme }) => theme.spacing.xl}px;

    --z-index-max: 100
  }

  body {
    font-family: var(--font-family-body, sans-serif);
  }
`
