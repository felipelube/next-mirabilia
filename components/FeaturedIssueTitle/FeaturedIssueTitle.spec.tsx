import { render } from "../../utils/test-utils"
import { FeaturedIssueTile, FeaturedIssueTitleProps } from "."

const THREE_DAYS = 3 * 3600 * 24

describe("FeaturedIssueTitle - component tests", () => {
  const defaultProps: FeaturedIssueTitleProps = {
    organizers: "Fulano de tal",
    issueSemester: "Excrescência 01 (2022/2)",
    acceptingPapersUntil: Date.now() + THREE_DAYS,
    subtitle:
      "Incididunt aliquip labore Lorem ipsum enim eiusmod tempor anim id culpa.",
    title: "Occaecat cupidatat fugiat non voluptate do.",
  }

  describe("should not render without essential props", () => {
    it("without a title", () => {
      const { title, ...filteredProps } = defaultProps
      const { container } = render(
        //@ts-expect-error
        <FeaturedIssueTile {...filteredProps}></FeaturedIssueTile>
      )
      expect(container).toBeEmptyDOMElement()
    })
  })
})
