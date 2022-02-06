export type FeaturedIssueTitleProps =
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    /**
     * The organizers of the issue
     */
    organizers: string
    /**
     * The issue semester
     */
    issueSemester: string
    /**
     * The last date that this issue is accepting papers
     */
    acceptingPapersUntil?: Date | number
    /**
     * The issue subtitle
     */
    subtitle?: string
    /**
     * The issue title
     */
    title: string
  }
