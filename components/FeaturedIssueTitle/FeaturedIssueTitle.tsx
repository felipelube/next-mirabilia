import React, { useMemo } from "react"
import type { FeaturedIssueTitleProps } from "./types"

const FeaturedIssueTile = React.forwardRef<
  HTMLAnchorElement,
  FeaturedIssueTitleProps
>(function FaturedIssueTitle(
  { organizers, issueSemester, acceptingPapersUntil, subtitle, title },
  ref
) {
  const acceptDeadlineText = useMemo(() => {
    return "" //TODO:
  }, [acceptingPapersUntil])

  return (
    <div>
      {organizers}
      <br />
      {issueSemester}
      {title}
      {subtitle}
      {acceptDeadlineText}
    </div>
  )
})

export { FeaturedIssueTile }
