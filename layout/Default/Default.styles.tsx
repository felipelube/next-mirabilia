import styled from "styled-components"

export const Sidebar = styled.aside`
  display: flex;
`
export const MainContent = styled.main``

export const Footer = styled.footer`
  display: flex;
  bottom: 0;
  background: rgba(200, 160, 116, 0.25);
  border: solid 1px #eabb6e;
  border-right: none;
  clear: both;
  min-height: 137px;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px auto;
  width: 960px;
  background: url(/images/main-bg.jpg) repeat-y;
  overflow: hidden;
  box-shadow: 0 5px 60px 2px #baaca9;

  ${Footer} {
    flex-grow: 1;
  }
`

export const FirstLine = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  position: relative;

  ${Sidebar} {
    flex-basis: ${(props) => props.theme.constants.sidebarWidth}px;
    flex-shrink: 0;
    flex-grow: 0;
  }

  ${MainContent} {
    flex-grow: 1;
  }
`
