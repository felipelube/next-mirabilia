import React, { useMemo } from "react"
import dayjs from "dayjs"
import LocalizedFormat from "dayjs/plugin/localizedFormat"

import type { FeaturedIssueTitleProps } from "./types"
import * as SFIT from "./FeaturedIssueTitle.styles"

dayjs.extend(LocalizedFormat)

const FeaturedIssueTitle = React.forwardRef<
  HTMLAnchorElement,
  FeaturedIssueTitleProps
>(function FeaturedIssueTitle(props, ref) {
  const {
    organizers,
    issueSemester,
    acceptingPapersUntil,
    subtitle,
    title,
    ...linkProps
  } = props

  const papersDeadline = useMemo(() => {
    const parsedDate = dayjs(acceptingPapersUntil)
    return parsedDate.isValid() && parsedDate.isAfter(Date.now())
      ? parsedDate.format("L LT")
      : ""
  }, [acceptingPapersUntil])

  return title && issueSemester && organizers ? (
    <SFIT.Box>
      <SFIT.Link ref={ref} {...linkProps}>
        <SFIT.Organizers>{organizers}</SFIT.Organizers>
        <SFIT.IssueSemester>{issueSemester}</SFIT.IssueSemester>
        <SFIT.Title>{title}</SFIT.Title>
        <SFIT.Subtitle>{subtitle}</SFIT.Subtitle>
      </SFIT.Link>
      {papersDeadline ? (
        <SFIT.Deadline data-testid="callForPapers">
          <span>{`Accepting papers until ${papersDeadline}`}.</span> Send your
          article to{" "}
          <a href="mailto:subm@revistamirabilia.com">
            subm@revistamirabilia.com
          </a>{" "}
          to publish in this issue. For more information, see our{` `}
          <a href="/send-article">submission guidelines</a>.
        </SFIT.Deadline>
      ) : null}
    </SFIT.Box>
  ) : null
})

export { FeaturedIssueTitle }
