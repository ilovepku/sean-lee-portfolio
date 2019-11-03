import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Isotope from "isotope-layout"
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
      allFilterJson {
        nodes {
          id
          name
          keyword
        }
      }
    }
  `)

  const [isotope, setIsotope] = useState(null)
  const [filterKey, setFilterKey] = useState("*")

  useEffect(() => {
    setIsotope(
      new Isotope(".filter-container", {
        itemSelector: ".filter-item",
      })
    )
  }, [])

  useEffect(() => {
    if (isotope) {
      filterKey === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` })
    }
  }, [isotope, filterKey])

  return (
    <Layout>
      <SEO title="Portfolio" />
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading">Portfolio</h2>
          <div className="intro">
            <p>
              Welcome to my online portfolio, a compilation of my freelance
              works, open source projects, as well as featured study practices.
              Interested in having me in your project? Feel free to give me a holler!
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
          <div className="text-center">
            <ul id="filters" className="filters mb-5 mx-auto pl-0">
              {data.allFilterJson.nodes.map(({ id, name, keyword }) => (
                <li
                  key={id}
                  className={`type mb-3 mb-lg-0 ${keyword === filterKey &&
                    "active"}`}
                  onClick={() => setFilterKey(keyword)}
                >
                  {name}
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-container project-cards row grid">
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
