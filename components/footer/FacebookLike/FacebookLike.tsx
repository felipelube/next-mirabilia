import Script from "next/script"
import styled from "styled-components"
import * as SFL from "./FacebookLike.styles"

function FacebookLike(props) {
  return (
    <div {...props}>
      <div id="fb-root"></div>
      <Script
        async
        defer
        src="https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v13.0"
        nonce="tqo9ZNgC"
      ></Script>
      <SFL.FacebookWidgetWrapper>
        <div
          className="fb-page"
          data-href="https://www.facebook.com/mirabiliamagazine"
          data-tabs=""
          data-width="230"
          data-height="130"
          data-small-header="false"
          data-adapt-container-width="false"
          data-hide-cover="false"
          data-show-facepile="true"
        >
          <blockquote
            cite="https://www.facebook.com/mirabiliamagazine"
            className="fb-xfbml-parse-ignore"
          >
            <a href="https://www.facebook.com/mirabiliamagazine">
              Mirabilia Journal
            </a>
          </blockquote>
        </div>
      </SFL.FacebookWidgetWrapper>
    </div>
  )
}

// Wrapping necessary to refer to this component in its parent styling
const StyledFacebookLike = styled.div``.withComponent(FacebookLike)
export { StyledFacebookLike as FacebookLike }
