import {
  render,
  shouldNotRenderWithoutEssentialProps,
} from "../../utils/test-utils"
import { FeaturedIssueTitle, FeaturedIssueTitleProps } from "."

const THREE_DAYS = 3 * 3600 * 24

describe("FeaturedIssueTitle - component tests", () => {
  const defaultProps: FeaturedIssueTitleProps = {
    organizers: "Fulano de tal",
    issueSemester: "Excrescência 01 (2022/2)",
    subtitle:
      "Incididunt aliquip labore Lorem ipsum enim eiusmod tempor anim id culpa.",
    title: "Occaecat cupidatat fugiat non voluptate do.",
  }

  it("should not render without essential props", () =>
    shouldNotRenderWithoutEssentialProps(FeaturedIssueTitle, defaultProps, [
      "title",
      "issueSemester",
      "organizers",
    ]))

  describe("deadline information tests", () => {
    beforeAll(() => {
      jest.useFakeTimers("modern")
    })

    it("should display the deadline message before the deadline", () => {
      const { getByTestId } = render(
        <FeaturedIssueTitle
          {...defaultProps}
          acceptingPapersUntil={Date.now() + THREE_DAYS}
        />
      )
      expect(getByTestId("callForPapers")).toBeInTheDocument()
    })

    it("should not display the deadline message after the deadline", () => {
      const { queryByTestId } = render(
        <FeaturedIssueTitle
          {...defaultProps}
          acceptingPapersUntil={Date.now() - THREE_DAYS}
        />
      )
      expect(queryByTestId("callForPapers")).toBeNull()
    })

    it("should not display the deadline message if there is no deadline set", () => {
      const { queryByTestId } = render(<FeaturedIssueTitle {...defaultProps} />)
      expect(queryByTestId("callForPapers")).toBeNull()
    })
  })
})
