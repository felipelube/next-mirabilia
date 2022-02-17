import styled from "styled-components"

export const Wrapper = styled.article`
  padding: ${({ theme }) => theme.spacing.sm}px
    ${({ theme }) => theme.spacing.lg}px;

  transition: background-color ease-out 0.25s;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.babyBlue};
  }
`

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.md}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.redAccent};

  transition: color ease-out 0.25s;

  ${Wrapper}:hover & {
    text-decoration: underline;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.linkHoverBlue};
  }
`
