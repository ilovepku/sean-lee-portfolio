import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import BlogItem from "./blog.item"

const BlogSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: { fileAbsolutePath: { glob: "**/src/pages/blogs/*.md" } }
        sort: { fields: [frontmatter___date], order: ASC }
        limit: 3
      ) {
        nodes {
          id
          frontmatter {
            path
            date
            title
            intro
            pic {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
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

      <section className="latest-blog-section p-3 p-lg-5">
        <div className="container">
          <h2 className="section-title font-weight-bold mb-5">
            Latest Blog Posts
          </h2>
          <div className="row">
            {data.allMarkdownRemark.nodes.map(({ id, frontmatter }) => (
              <BlogItem key={id} frontmatter={frontmatter} />
            ))}
          </div>
          <div className="text-center py-5">
            <Link to="/blogs" className="btn btn-primary">
              <FontAwesomeIcon icon="arrow-alt-circle-right" className="mr-2" />
              View Blog
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default BlogSection
