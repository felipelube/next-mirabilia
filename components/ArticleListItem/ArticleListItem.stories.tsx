// ArticleListItem.stories.ts|tsx

import React from "react"

import { ComponentStory, ComponentMeta } from "@storybook/react"

import { ArticleListItem } from "./ArticleListItem"
import type { ArticleListItemProps } from "."

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "ArticleListItem",
  component: ArticleListItem,
} as ComponentMeta<typeof ArticleListItem>

const defaultProps: ArticleListItemProps = {
  originalTitle: "The Diablo in la sierra",
  abstract:
    "Voluptate laboris non proident minim consequat ullamco deserunt sint nulla Lorem eu. Amet ut occaecat ut enim veniam aute eiusmod elit aliqua. In enim excepteur consequat ipsum velit id pariatur laboris ipsum ipsum. Lorem cupidatat aute proident magna ut non officia ipsum est.",
  keywords: [
    "magna",
    "exercitation",
    "laboris",
    "consequat",
    "mollit",
    "enim",
    "sit",
    "sint",
  ],
  authors: "Ricardo Montana and Baldur Udur",
  title: "Est in pariatur magna ea eu",
  url: "https://www.google.com",
  issueTitle: "Baldur bests",
  issueURL: "https://www.google.com",
}

const Template: ComponentStory<typeof ArticleListItem> = (args) => (
  <ArticleListItem {...args} />
)

export const Default = Template.bind({})

Default.args = defaultProps
