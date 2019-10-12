import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const PortfolioItem = ({
  frontmatter: { path, name, intro, pics, madeFor, type },
}) => {
  console.log(pics)
  return (
    <div className={`filter-item col-md-6 mb-5 ${type}`}>
      <div className="card project-card">
        <div className="row no-gutters">
          <div className="col-lg-4 card-img-holder">
            <Img className="card-img" fluid={pics[0].childImageSharp.fluid} />
          </div>
          <div className="col-lg-8">
            <div className="card-body">
              <h5 className="card-title">
                <Link to={path} className="theme-link">
                  {name}
                </Link>
              </h5>
              <p className="card-text">{intro}</p>
              <p className="card-text">
                <small className="text-muted">{madeFor}</small>
              </p>
            </div>
          </div>
        </div>
        <div className="link-mask">
          <div className="link-mask-text">
            <Link to={path} className="btn btn-secondary">
              <FontAwesomeIcon icon="eye" className="mr-2" />
              View Case Study
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PortfolioItem
