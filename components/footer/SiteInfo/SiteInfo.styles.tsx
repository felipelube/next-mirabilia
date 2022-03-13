import styled from "styled-components"

export const Wrapper = styled.div`
  padding: ${(props) => props.theme.spacing.sm}px;
  font-size: ${(props) => props.theme.fontSize.xxxs}px;
  line-height: ${(props) => props.theme.lineHeight.sm}px;
  color: ${(props) => props.theme.colors.blackFadedText};

  a {
    color: ${(props) => props.theme.colors.redAccent};
  }
`

export const ISSN = styled.h1`
  color: ${(props) => props.theme.colors.black};
  font-size: ${(props) => props.theme.fontSize.md}px;
  margin-bottom: ${(props) => props.theme.spacing.xs}px;
`
