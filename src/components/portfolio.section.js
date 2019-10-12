import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PortfolioItem from "./portfolio.item"

const PortfolioSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/pages/projects/*.md" } }
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
            madeFor
          }
        }
      }
    }
  `)
  return (
    <>
      <div className="container">
        <hr />
      </div>

      <section className="featured-section p-3 p-lg-5">
        <div className="container">
          <h2 className="section-title font-weight-bold mb-5">
            Featured Projects
          </h2>
          <div className="row">
            {data.allMarkdownRemark.nodes.map(({ id, frontmatter }) => (
              <PortfolioItem key={id} frontmatter={frontmatter} />
            ))}
          </div>
          <div className="text-center py-3">
            <Link to="/portfolio" className="btn btn-primary">
              <FontAwesomeIcon icon="arrow-alt-circle-right" className="mr-2" />
              View Portfolio
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default PortfolioSection
