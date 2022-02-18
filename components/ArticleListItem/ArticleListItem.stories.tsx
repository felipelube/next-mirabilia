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
  originalTitle:
    " O conflito religioso no século V por meio de duas visões paralelas – O saque de Roma, de 410 d.C., em duas obras literárias: De Reditu suo, de Rutilio Namaziano, e A Cidade de Deus, de Santo Agostinho",
  abstract:
    "This article wants to analyze the event known as The Sack of Rome, occurred on 410 DC, using two contemporary works: De Reditu Suo, of the pagan poet Rutilio Namaziano and The City of God, written by the bishop Agostine from Hipona. The choice of these authors aimed to draw a religious parallel that illustrates the theological conflict that existed in that time. It will be initially presented the historical context preceding the period in question, known as Late Antiquity. Will be presented the political, social, economic and military questions, in order to understand the religious and social conflict caused by the rise of Christianity and the consequent decline of paganism. Is important to remember that this article is not intended to be a theological or literary thesis about the works that we are studying here. It is only a superficial historical view of an extremely wide and rich period, too complex to be treated in a few pages.",
  keywords: [
    "Christianity",
    "Late Antiquity",
    "Paganism",
    "Sack of Rome",
    "Theological conflict..",
  ],
  authors: "Bento SILVA SANTOS, Filicio MULINARI",
  title:
    "Religious conflict in the fifth century through two parallel views – The sack of Rome in 410 AD in two literary works: De Reditu suo of Rutilio Namaziano and The City of God, of St. Augustine",
  url: "https://www.google.com",
  issueTitle:
    "Relations between History and Literature in Ancient and Medieval World",
  issueURL: "https://www.revistamirabilia.com/issues/mirabilia-13-2011-2",
}

const Template: ComponentStory<typeof ArticleListItem> = (args) => (
  <ArticleListItem {...args} />
)

export const Default = Template.bind({})

Default.args = defaultProps
