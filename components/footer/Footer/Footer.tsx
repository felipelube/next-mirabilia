import { FacebookLike } from "../FacebookLike"
import { IndexesLogos } from "../IndexesLogos"
import { SiteInfo } from "../SiteInfo"

import * as StyledFooter from "./Footer.styles"

export function Footer() {
  return (
    <>
      <StyledFooter.Sidebar>
        <SiteInfo />
        <FacebookLike />
      </StyledFooter.Sidebar>
      <StyledFooter.Main>
        <IndexesLogos />
      </StyledFooter.Main>
    </>
  )
}
