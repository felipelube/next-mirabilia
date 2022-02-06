// FeaturedIssueTitle.stories.ts|tsx

import React from "react"

import { ComponentStory, ComponentMeta } from "@storybook/react"

import { FeaturedIssueTitle } from "./FeaturedIssueTitle"
import type { FeaturedIssueTitleProps } from "."

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "FeaturedIssueTitle",
  component: FeaturedIssueTitle,
} as ComponentMeta<typeof FeaturedIssueTitle>

const defaultProps: FeaturedIssueTitleProps = {
  organizers: "Fulano de tal e Siclano Oliveira",
  issueSemester: "Libanus 01 (2022/2)",
  subtitle:
    "Incididunt aliquip labore Lorem ipsum enim eiusmod tempor anim id culpa.",
  title: "Occaecat cupidatat fugiat non voluptate do.",
}

const THREE_DAYS_IN_MS = Date.now() + 3600 * 24 * 3

export const Default: ComponentStory<typeof FeaturedIssueTitle> = () => (
  <FeaturedIssueTitle {...defaultProps} href="https://www.google.com" />
)

export const Deadline: ComponentStory<typeof FeaturedIssueTitle> = () => (
  <FeaturedIssueTitle
    {...defaultProps}
    acceptingPapersUntil={THREE_DAYS_IN_MS}
    href="https://www.google.com"
  />
)
