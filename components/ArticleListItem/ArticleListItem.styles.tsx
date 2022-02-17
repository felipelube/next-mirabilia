import styled from "styled-components"

export const Wrapper = styled.article`
  padding: ${({ theme }) => theme.spacing.sm}px
    ${({ theme }) => theme.spacing.lg}px;

  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.colors.babyBlue};
  }
`
