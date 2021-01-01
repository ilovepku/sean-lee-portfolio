import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Layout from "../components/layout"
import PortfolioItem from "../components/portfolio.item"
import SEO from "../components/seo"

const PortfolioPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/pages/projects/*.md" } }
        sort: { fields: [frontmatter___order], order: ASC }
      ) {
        nodes {
          id
          frontmatter {
            path
            name
            intro
            pics {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            type
            techs
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Portfolio" />
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading">Portfolio</h2>
          <div className="intro">
            <p>
              Welcome to my online portfolio, a compilation of my open source
              projects and featured study practices. Interested in having me in
              your project? Feel free to give me a holler!
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            <FontAwesomeIcon icon="envelope-open-text" className="mr-2" />
            Contact Me
          </Link>
        </div>
      </section>
      <section className="projects-list px-3 py-5 p-md-5">
        <div className="container">
          <div className="project-cards row grid">
            {data.allMarkdownRemark.nodes.map(({ id, frontmatter }) => (
              <PortfolioItem key={id} frontmatter={frontmatter} />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default PortfolioPage
