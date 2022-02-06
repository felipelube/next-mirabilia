import { render } from "../../utils/test-utils"
import { FeaturedIssueTile, FeaturedIssueTitleProps } from "."

const THREE_DAYS = 3 * 3600 * 24

describe("FeaturedIssueTitle - component tests", () => {
  const defaultProps: FeaturedIssueTitleProps = {
    organizers: "Fulano de tal",
    issueSemester: "Excrescência 01 (2022/2)",
    subtitle:
      "Incididunt aliquip labore Lorem ipsum enim eiusmod tempor anim id culpa.",
    title: "Occaecat cupidatat fugiat non voluptate do.",
  }

  it("should not render without essential props", () => {
    ;["title", "issueSemester", "organizers"].forEach((requiredProp) => {
      const filteredProps = Object.entries(defaultProps).reduce(
        (obj: any, [key, value]) => {
          if (key !== requiredProp) {
            obj[key] = value
          }
          return obj
        },
        {}
      )
      const { container } = render(
        <FeaturedIssueTile {...filteredProps}></FeaturedIssueTile>
      )
      expect(container).toBeEmptyDOMElement()
    })
  })

  describe("deadline information tests", () => {
    beforeAll(() => {
      jest.useFakeTimers("modern")
    })

    it("should display the deadline message before the deadline", () => {
      const { getByTestId } = render(
        <FeaturedIssueTile
          {...defaultProps}
          acceptingPapersUntil={Date.now() + THREE_DAYS}
        />
      )
      expect(getByTestId("callForPapers")).toBeInTheDocument()
    })

    it("should not display the deadline message after the deadline", () => {
      const { queryByTestId } = render(
        <FeaturedIssueTile
          {...defaultProps}
          acceptingPapersUntil={Date.now() - THREE_DAYS}
        />
      )
      expect(queryByTestId("callForPapers")).toBeNull()
    })

    it("should not display the deadline message if there is no deadline set", () => {
      const { queryByTestId } = render(<FeaturedIssueTile {...defaultProps} />)
      expect(queryByTestId("callForPapers")).toBeNull()
    })
  })
})
