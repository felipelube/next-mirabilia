import * as Layout from "./Default.styles"

import { Footer } from "../../components/footer/Footer"

import type { DefaultLayoutProps } from "./types"
import { LogoMirabilia } from "../../components/sidebar/LogoMirabilia"
import Link from "next/link"

export function DefaultLayout({ mainMenu = [], children }: DefaultLayoutProps) {
  return (
    <Layout.Wrapper>
      <Layout.FirstLine>
        <Layout.Sidebar>
          <Link href="/" passHref>
            <a>
              <LogoMirabilia />
            </a>
          </Link>
        </Layout.Sidebar>
        <Layout.MainContent>{children}</Layout.MainContent>
      </Layout.FirstLine>
      <Layout.Footer>
        <Footer />
      </Layout.Footer>
    </Layout.Wrapper>
  )
}
