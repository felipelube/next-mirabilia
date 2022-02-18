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
}) =>
  title && url && authors ? (
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
        {originalTitle && (
          <SALI.Info>Original title: {originalTitle}</SALI.Info>
        )}
        {issueTitle && (
          <SALI.Info>
            Published in <a href={issueURL}>{issueTitle}</a>
          </SALI.Info>
        )}
        <SALI.Info>Keywords: {keywords.join(", ")}.</SALI.Info>
        <SALI.Abstract>{abstract}</SALI.Abstract>
      </div>
    </SALI.Wrapper>
  ) : null

export { ArticleListItem }
