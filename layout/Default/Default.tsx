import * as Layout from "./Default.styles"

import { Footer } from "../../components/footer/Footer"

import type { DefaultLayoutProps } from "./types"

export function DefaultLayout({ mainMenu = [], children }: DefaultLayoutProps) {
  return (
    <Layout.Wrapper>
      <Layout.FirstLine>
        <Layout.Sidebar mainMenu={mainMenu}></Layout.Sidebar>
        <Layout.MainContent>{children}</Layout.MainContent>
      </Layout.FirstLine>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout.Wrapper>
  )
}
