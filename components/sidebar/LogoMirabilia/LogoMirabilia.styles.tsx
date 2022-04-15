import styled from "styled-components"

export const Figure = styled.figure`
  padding-top: ${(props) => props.theme.spacing.sm}px;
`

export const FigCaption = styled.figcaption`
  text-align: center;
  margin: ${(props) => props.theme.spacing.sm}px;
  margin-top: ${(props) => props.theme.spacing.xs}px;
  font-size: ${(props) => props.theme.fontSize.xxs}px;
  line-height: ${(props) => props.theme.lineHeight.sm}px;
`
