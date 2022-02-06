export type FeaturedIssueTitleProps =
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    organizers: string
    issueSemester: string
    acceptingPapersUntil?: Date | number
    subtitle?: string
    title: string
  }
