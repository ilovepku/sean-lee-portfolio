import React from "react"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const TestimonialItem = ({
  testimonial: { text, avatar, person, position, company },
}) => {
  return (
    <>
      <div className="quote-holder">
        <blockquote className="quote-content">{text}</blockquote>
        <FontAwesomeIcon icon="quote-left" />
      </div>
      <div className="source-holder">
        <div className="source-profile">
          <Img fixed={avatar.childImageSharp.fixed} />
        </div>
        <div className="meta">
          <div className="name">{person}</div>
          <div className="info">{position}</div>
          <div className="info">{company}</div>
        </div>
      </div>
    </>
  )
}

export default TestimonialItem
