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
    <h2>
      <a target="_blank" href={url} rel="noreferrer">
        {title}{" "}
      </a>
    </h2>
    <span property="dc:title" content={title}></span>{" "}
    <div>
      <h3>{authors}</h3>
      <h3>
        <strong>Original title:</strong>
        {originalTitle}{" "}
      </h3>
      <h3>
        <strong>Keywords: </strong>
        {keywords.join(", ")}{" "}
      </h3>
      <p>{abstract} </p>
    </div>
  </SALI.Wrapper>
)

export { ArticleListItem }
