import { ISiteMenu } from "../../types/menu-system"

import * as Layout from "./Default.styles"
import type { DefaultLayoutProps } from "./types"

export function DefaultLayout({ mainMenu = [], children }: DefaultLayoutProps) {
  return <Layout.Wrapper>{children}</Layout.Wrapper>
  /*
  return (
    <Layout.Wrapper>
      <Layout.Sidebar mainMenu={mainMenu}></Layout.Sidebar>
      <Layout.MainContent></Layout.MainContent>
      <Layout.Footer></Layout.Footer>
    </Layout.Wrapper>
  )
  */
}
