import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import Layout from "../../components/layout"
import BlogItem from "../../components/blog.item"
import MailchimpForm from "../../components/mailchimp.form"
import SEO from "../../components/seo"

// mailchip settings
const url =
  "//gmail.us20.list-manage.com/subscribe/post?u=7d2dd6216c12ce2d858707378&amp;id=b3b880b90d"

const BlogsTemplate = ({
  pageContext: { currentPage, numPages },
  data: {
    allMarkdownRemark: { nodes },
  },
}) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center">
          <h2 className="heading">
            Sean Lee's Blog On Coding and Expat Life in Germany
          </h2>
          <div className="intro">
            Welcome to my blog. Subscribe and get my latest blog post in your
            inbox.
          </div>
          <MailchimpSubscribe
            url={url}
            render={({ subscribe, status, message }) => (
              <MailchimpForm
                status={status}
                message={message}
                onValidated={(formData) => subscribe(formData)}
              />
            )}
          />
        </div>
      </section>
      <section className="blog-list px-3 py-5 p-md-5">
        <div className="container">
          <div className="row">
            {nodes.map(({ id, frontmatter }) => (
              <BlogItem key={id} frontmatter={frontmatter} />
            ))}
          </div>
          <nav className="blog-nav nav nav-justified my-5">
            {!(currentPage === 1) && ( // isFirst check
              <Link
                to={
                  currentPage - 1 === 1
                    ? "/blogs"
                    : `/blogs/${(currentPage - 1).toString()}`
                }
                className="nav-link-prev nav-item nav-link rounded-left"
              >
                Previous
                <FontAwesomeIcon
                  icon="long-arrow-alt-left"
                  className="arrow-prev"
                />
              </Link>
            )}
            {!(currentPage === numPages) && ( // isLast check
              <Link
                to={`/blogs/${(currentPage + 1).toString()}`}
                className="nav-link-next nav-item nav-link rounded-right"
              >
                Next
                <FontAwesomeIcon
                  icon="long-arrow-alt-right"
                  className="arrow-next"
                />
              </Link>
            )}
          </nav>
        </div>
      </section>
    </Layout>
  )
}

BlogsTemplate.propTypes = {
  pageContext: PropTypes.shape({
    currentPage: PropTypes.number.isRequired,
    numPages: PropTypes.number.isRequired,
  }),
  data: PropTypes.exact({
    allMarkdownRemark: PropTypes.exact({
      nodes: PropTypes.arrayOf(
        PropTypes.exact({
          id: PropTypes.string.isRequired,
          frontmatter: PropTypes.exact({
            path: PropTypes.string.isRequired,
            date: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            intro: PropTypes.string.isRequired,
            pic: PropTypes.exact({
              childImageSharp: PropTypes.object.isRequired,
            }),
          }),
        })
      ),
    }),
  }),
}

export default BlogsTemplate

export const pageQuery = graphql`
  query($skip: Int, $limit: Int) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/src/pages/blogs/*.md" } }
      sort: { fields: [frontmatter___date], order: ASC }
      skip: $skip
      limit: $limit
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
`
