import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { timeSince } from "../utils/timeSince.util"

const BlogItem = ({ frontmatter: { path, date, title, intro, pic } }) => {
  return (
    <div className="col-md-4 mb-3">
      <div className="card blog-post-card">
        <Img className="card-img-top" fluid={pic.childImageSharp.fluid} />
        <div className="card-body">
          <h5 className="card-title">
            <Link to={path} className="theme-link">
              {title}
            </Link>
          </h5>
          <p className="card-text">{intro}</p>
          <p className="mb-0">
            <Link to={path} className="more-link">
              Read more →
            </Link>
          </p>
        </div>
        <div className="card-footer">
          <small className="text-muted">
            Published {timeSince(new Date(date))} ago
          </small>
        </div>
      </div>
    </div>
  )
}

export default BlogItem
