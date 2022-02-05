import React, { useMemo } from "react"
import type { FeaturedIssueTitleProps } from "./types"

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
    <a ref={ref} {...props}>
      {organizers}
      <br />
      {issueSemester}
      {title}
      {subtitle}
      {acceptDeadlineText}
    </a>
  )
})

export { FeaturedIssueTile }
