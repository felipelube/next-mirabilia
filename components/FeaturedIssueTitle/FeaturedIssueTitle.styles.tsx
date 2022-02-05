import styled from "styled-components"

export const Box = styled.a`
  border: solid 2px ${(props) => props.theme.colors.goldenBorder};
  background: ${(props) => props.theme.colors.boxBackground};
  z-index: ${(props) => props.theme.zIndexes.max};
  padding: ${(props) => props.theme.spacing.sm}px;
  box-shadow: 0 5px 10px 0 rgb(130 88 82 / 20%);
  transition: All 0.2s ease;
  text-align: center;
  position: relative;
  margin-top: -100px;
  margin: 0 auto;
  opacity: 0.83;
  width: 475px;

  &:hover {
    border: solid 2px ${(props) => props.theme.colors.boxHoverBlue};
    box-shadow: 0 5px 10px 0 #baaca9;
  }
`
