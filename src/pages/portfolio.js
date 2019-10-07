import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Isotope from "isotope-layout"
import Layout from "../components/layout"
import PortfolioItem from "../components/portfolio.item"

const PortfolioPage = () => {
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
            pic {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            client
            type
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
        layoutMode: "fitRows",
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
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading">Portfolio</h2>
          <div className="intro">
            <p>
              Welcome to my online portfolio. Lorem ipsum dolor sit amet,
              consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
              I'm taking on freelance work at the moment. Want some help
              building your software?
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary">
            <FontAwesomeIcon icon="paper-plane" className="mr-2" />
            Hire Me
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
