import styled from "styled-components"
import { FacebookLike } from "../FacebookLike"

export const Sidebar = styled.aside`
  flex-basis: ${(props) => props.theme.constants.sidebarWidth}px;
  flex-shrink: 0;
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  position: relative;

  ${FacebookLike} {
    margin-top: auto;
  }
`
export const Main = styled.div``
