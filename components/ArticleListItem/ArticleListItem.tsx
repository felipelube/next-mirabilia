import React from "react"

import type { ArticleListItemProps } from "./types"
import * as SALI from "./ArticleListItem.styles"

const ArticleListItem: React.FC<ArticleListItemProps> = ({
  originalTitle = "",
  abstract = "",
  keywords = [],
  authors,
  title,
  url,
  issueTitle = "",
  issueURL = "",
  ...props
}) => (
  <SALI.Wrapper {...props}>
    <SALI.Title>
      <a target="_blank" href={url} rel="noreferrer">
        {title}{" "}
      </a>
    </SALI.Title>
    <span property="dc:title" content={title}></span>{" "}
    <div>
      <SALI.Authors>
        <strong>{authors}</strong>
      </SALI.Authors>
      <SALI.Info>Original title: {originalTitle}</SALI.Info>
      <SALI.Info>Keywords: {keywords.join(", ")}</SALI.Info>
    </div>
  </SALI.Wrapper>
)

export { ArticleListItem }
