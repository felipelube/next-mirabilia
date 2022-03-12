import { ISiteMenu } from "../types/menu-system";

export function DefaultLayout(mainMenu: ISiteMenu) {
  return (
    <Layout.Wrapper>
      <Layout.Sidebar mainMenu={mainMenu}></Layout.Sidebar>
      <Layout.MainContent></Layout.MainContent>
      <Layout.Footer></Layout.Footer>
    </Layout.Wrapper>
  )
}