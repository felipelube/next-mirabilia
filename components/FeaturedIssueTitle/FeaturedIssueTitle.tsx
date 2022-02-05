import React, { useMemo } from "react"
import type { FeaturedIssueTitleProps } from "./types"
import * as SFIT from "./FeaturedIssueTitle.styles"

const FeaturedIssueTile = React.forwardRef<
  HTMLAnchorElement,
  FeaturedIssueTitleProps
>(function FeaturedIssueTitle(
  props,
  ref
) {
  const {
    organizers,
    issueSemester,
    acceptingPapersUntil,
    subtitle,
    title,
    ...linkProps
  } = props

  const acceptDeadlineText = useMemo(() => {
    return "" //TODO:
  }, [acceptingPapersUntil])

  return (
    <SFIT.Box ref={ref} {...linkProps}>
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
