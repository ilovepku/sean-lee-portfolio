import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import profileLg from "../images/profile-lg.jpg"

const AboutSection = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)
  return (
    <section className="about-me-section p-3 p-lg-5 theme-bg-light">
      <div className="container">
        <div className="profile-teaser media flex-column flex-lg-row">
          <div className="media-body">
            <h2 className="name font-weight-bold mb-1">
              {data.site.siteMetadata.author}
            </h2>
            <div className="tagline mb-3">Senior Full Stack Developer</div>
            <div className="bio mb-4">
              I'm an full stack developer / mentor specialised in frontend and backend
              development for complex scalable web apps. I write about software
              development on{" "}
              <Link to="/blogs" className="link-on-bg">
                my blog
              </Link>
              . Want to know how I may help your project? Check out my project{" "}
              <Link to="/portfolio" className="link-on-bg">
                portfolio
              </Link>{" "}
              and{" "}
              <Link to="/resume" className="link-on-bg">
                online resume
              </Link>
              .
            </div>
            <div className="mb-4">
              <Link to="/portfolio" className="btn btn-primary mr-2 mb-3">
                <FontAwesomeIcon
                  icon="arrow-alt-circle-right"
                  className="mr-2"
                />
                <span className="d-none d-md-inline">View</span> Portfolio
              </Link>
              <Link to="/resume" className="btn btn-secondary mb-3">
                <FontAwesomeIcon icon="file-alt" className="mr-2" />
                <span className="d-none d-md-inline">View</span> Resume
              </Link>
            </div>
          </div>
          <img
            className="profile-image mb-3 mb-lg-0 ml-lg-5 mr-md-0"
            src={profileLg}
            alt=""
          />
        </div>
      </div>
    </section>
  )
}

export default AboutSection
