import Image from "next/image"

import * as StyledSiteInfo from "./SiteInfo.styles"

export function SiteInfo() {
  return (
    <StyledSiteInfo.Wrapper>
      <a
        href="http://www.ivitra.ua.es/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          title="Ivitra - Institut Virtual Internacional de Traducción"
          src="/images/logoivitraisic.png"
          alt="Ivitra - Institut Virtual Internacional de Traducción"
          width="125"
          height="100"
        />
      </a>
      <StyledSiteInfo.ISSN>ISSN 1676-5818</StyledSiteInfo.ISSN>
      <p>© 2000 Mirabilia Journal.</p>
      <p>All rights reserved.</p>
      <p>
        <em>Developed by</em>{" "}
        <a href="https://br.linkedin.com/in/felubra">Felipe Lube</a>.
      </p>
    </StyledSiteInfo.Wrapper>
  )
}
