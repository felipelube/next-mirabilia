import React, { useMemo } from "react"
import type { FeaturedIssueTitleProps } from "./types"
import * as SFIT from "./FeaturedIssueTitle.styles"

const FeaturedIssueTile = React.forwardRef<
  HTMLAnchorElement,
  FeaturedIssueTitleProps
>(function FeaturedIssueTitle(
  {
    organizers,
    issueSemester,
    acceptingPapersUntil,
    subtitle,
    title,
    ...props
  },
  ref
) {
  const acceptDeadlineText = useMemo(() => {
    return "" //TODO:
  }, [acceptingPapersUntil])

  return (
    <SFIT.Box ref={ref} {...props}>
      {organizers}
      <br />
      {issueSemester}
      {title}
      {subtitle}
      {acceptDeadlineText}
    </SFIT.Box>
  )
})

export { FeaturedIssueTile }
