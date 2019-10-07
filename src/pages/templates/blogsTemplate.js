import React from "react"
import { graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import MailchimpSubscribe from "react-mailchimp-subscribe"
import Layout from "../../components/layout"
import BlogItem from "../../components/blog.item"

// mailchip settings
const url =
  "//gmail.us20.list-manage.com/subscribe/post?u=7d2dd6216c12ce2d858707378&amp;id=b3b880b90d"

const MailchimpForm = ({ status, message, onValidated }) => {
  let email
  const submit = () =>
    email &&
    email.value.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email.value,
    })
  return (
    <>
      <div className="signup-form form-inline justify-content-center pt-3">
        <div className="form-group">
          <label className="sr-only" htmlFor="semail">
            Your email
          </label>
          <input
            id="semail"
            ref={node => (email = node)}
            type="email"
            placeholder="Enter email"
            className="form-control mr-md-1 semail"
          />
        </div>
        <button onClick={submit} className="btn btn-primary">
          Submit
        </button>
      </div>
      <div className="d-flex justify-content-center pt-3">
        {(() => {
          switch (status) {
            case "sending":
              return (
                <div className="alert alert-info" role="alert">
                  Sending...
                </div>
              )
            case "error":
              return (
                <div
                  className="alert alert-danger"
                  role="alert"
                  dangerouslySetInnerHTML={{ __html: message }}
                />
              )
            case "success":
              return (
                <div
                  className="alert alert-success"
                  role="alert"
                  dangerouslySetInnerHTML={{ __html: message }}
                />
              )
            default:
              return null
          }
        })()}
      </div>
    </>
  )
}

const BlogsTemplate = props => {
  const { currentPage, numPages } = props.pageContext
  return (
    <Layout>
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center">
          <h2 className="heading">
            A Blog About Software Development And Life
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
                onValidated={formData => subscribe(formData)}
              />
            )}
          />
        </div>
      </section>
      <section className="blog-list px-3 py-5 p-md-5">
        <div className="container">
          <div className="row">
            {props.data.allMarkdownRemark.nodes.map(({ id, frontmatter }) => (
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

export default BlogsTemplate

export const pageQuery = graphql`
  query($skip: Int, $limit: Int) {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { glob: "**/src/pages/blogs/*.md" } }
      sort: { fields: [frontmatter___date], order: DESC }
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
          pic
        }
      }
    }
  }
`
