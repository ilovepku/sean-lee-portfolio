import React from "react"
import PropTypes from "prop-types"
import { graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DiscussionEmbed, CommentCount } from "disqus-react"
import { timeSince } from "../../utils/timeSince.util"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
// import PromoSection from "../../components/promo.section"

const BlogPostTemplate = ({
  data: { markdownRemark },
  pageContext: { prevPath, nextPath },
  location: { href },
}) => {
  if (markdownRemark) {
    var {
      id,
      frontmatter: { title, date, intro },
      html,
      fields: {
        readingTime: { text },
      },
    } = markdownRemark
  }

  // disqus settings
  const disqusShortname = "sean-lee"
  const disqusConfig = {
    url: href,
    identifier: id,
    title: title,
  }

  return (
    <Layout>
      <SEO title={title} description={intro} />
      <article className="blog-post px-3 py-5 p-md-5">
        <div className="container single-col-max-width">
          <header className="blog-post-header">
            <h2 className="title mb-2">{title}</h2>
            <div className="meta mb-3">
              <span className="date">
                Published {timeSince(new Date(date))} ago
              </span>
              <span className="time">{text}</span>
              <span className="comment">
                <a href="#comment-section">
                  <CommentCount
                    shortname={disqusShortname}
                    config={disqusConfig}
                  />
                </a>
              </span>
            </div>
          </header>

          <div
            className="blog-post-body"
            dangerouslySetInnerHTML={{ __html: html }}
          />

          <nav className="blog-nav nav nav-justified my-5">
            {prevPath && (
              <Link
                to={prevPath}
                className="nav-link-prev nav-item nav-link rounded-left"
              >
                Previous
                <FontAwesomeIcon
                  icon="long-arrow-alt-left"
                  className="arrow-prev"
                />
              </Link>
            )}
            {nextPath && (
              <Link
                to={nextPath}
                className="nav-link-prev nav-item nav-link rounded-right"
              >
                Next
                <FontAwesomeIcon
                  icon="long-arrow-alt-right"
                  className="arrow-next"
                />
              </Link>
            )}
          </nav>
          <div id="comment-section" className="blog-comments-section">
            <DiscussionEmbed
              shortname={disqusShortname}
              config={disqusConfig}
            />
          </div>
        </div>
      </article>
      {/* <PromoSection /> */}
    </Layout>
  )
}

BlogPostTemplate.propTypes = {
  pageContext: PropTypes.shape({
    prevPath: PropTypes.string.isRequired,
    nextPath: PropTypes.string.isRequired,
  }),
  location: PropTypes.shape({
    href: PropTypes.string.isRequired,
  }),
  data: PropTypes.exact({
    markdownRemark: PropTypes.exact({
      id: PropTypes.string.isRequired,
      html: PropTypes.node.isRequired,
      frontmatter: PropTypes.exact({
        title: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        intro: PropTypes.string.isRequired,
      }),
      fields: PropTypes.exact({
        readingTime: PropTypes.exact({
          text: PropTypes.string.isRequired,
        }),
      }),
    }),
  }),
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        date
        title
        intro
      }
      fields {
        readingTime {
          text
        }
      }
    }
  }
`
