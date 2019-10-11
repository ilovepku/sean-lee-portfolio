import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Layout from "../../components/layout"

// webpack feature: function mapping all *.svg paths to the actual data:image
const reqSvgs = require.context("../../images/webdev-icons", true, /\.svg$/)

const ProjectTemplate = ({ data: { markdownRemark } }) => {
  if (markdownRemark) {
    var {
      id,
      html,
      frontmatter: { name, intro, pic, madeFor, url, desc, techs },
    } = markdownRemark
  }
  return (
    <Layout>
      <section className="cta-section theme-bg-light py-5">
        <div className="container single-col-max-width">
          <h2 className="heading text-center">{name}</h2>
          <div className="project-intro text-center">
            <p className="mb-0 lead">{intro}</p>
          </div>
        </div>
      </section>
      <section className="project px-3 py-5 p-md-5">
        <div className="container">
          <div className="project-meta media flex-column flex-md-row p-4 theme-bg-light">
            <Img
              className="project-thumb mb-3 mb-md-0 mr-md-5 rounded d-none d-md-inline-block"
              fluid={pic && pic.childImageSharp.fluid}
            />
            <div className="media-body">
              <div className="client-info">
                <h3 className="client-name font-weight-bold mb-4">{name}</h3>
                <ul className="client-meta list-unstyled">
                  <li className="mb-2">
                    <FontAwesomeIcon icon="mug-hot" className="fa-fw mr-2" />
                    <strong>For: </strong>
                    {madeFor}
                  </li>
                  <li className="mb-2">
                    <FontAwesomeIcon icon="link" className="fa-fw mr-2" />
                    <strong>Link: </strong>
                    <a className="theme-link" href={url}>
                      {url && url.slice(2)}
                    </a>
                  </li>
                </ul>
                <div className="client-bio mb-4">{desc}</div>
                <h4 className="subheading mb-3">Technologies Used</h4>
                <div className="webdev-icons row mb-5 align-items-center">
                  {techs &&
                    techs.map((tech, idx) => (
                      <div
                        className="webdev-icon col-3 col-md-2 mr-0 mb-4"
                        key={id + "_tech_" + idx}
                      >
                        <img
                          alt=""
                          title={tech}
                          className="img-fluid"
                          src={reqSvgs(`./${tech.toLowerCase()}.svg`)}
                        />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
          <div
            className="project-sections py-5"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </section>

      <section className="promo-section theme-bg-light py-5 text-center">
        <div className="container single-col-max-width">
          <h2 className="title">Want me to help with your project?</h2>
          <p>
            If you take on freelance work, you can use this section to prompt
            any potential clients to get in touch with you with their project
            requirements.
          </p>
          <div className="text-center">
            <Link to="/contact" className="btn btn-primary">
              <FontAwesomeIcon icon="envelope-open-text" className="mr-2" />
              Contact Me
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default ProjectTemplate

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        date
        path
        name
        intro
        pic {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        madeFor
        url
        desc
        techs
      }
    }
  }
`
