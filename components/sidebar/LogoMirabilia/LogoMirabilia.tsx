import Image from "next/image"
import * as Styled from "./LogoMirabilia.styles"

export const LogoMirabilia: React.FC = ({ children }) => (
  <Styled.Figure>
    <Image
      alt="Eletronic Journal of Antiquity, Middle & Modern Ages"
      src="/images/logo-mirabilia.png"
      width="220"
      height="174"
      priority
    />
    <Styled.FigCaption>
      Eletronic Journal of Antiquity, Middle & Modern Ages
    </Styled.FigCaption>
  </Styled.Figure>
)
