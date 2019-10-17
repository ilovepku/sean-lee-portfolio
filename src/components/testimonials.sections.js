import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import TestimonialItem from "./testimonial.item"

const TestimonialsSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { glob: "**/src/pages/projects/*.md" }
          frontmatter: { testimonial: { text: { ne: "" } } }
        }
      ) {
        nodes {
          id
          frontmatter {
            testimonial {
              text
              avatar {
                childImageSharp {
                  fixed(width: 60, height: 60) {
                    ...GatsbyImageSharpFixed
                  }
                }
              }
              person
              position
              company
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
      <section className="testimonials-section p-3 p-lg-5">
        <div className="container">
          <h2 className="section-title font-weight-bold mb-5">Testimonials</h2>
          <div className="testimonial-carousel row">
            {data.allMarkdownRemark.nodes.map(
              ({ id, frontmatter: { testimonial } }, idx) => (
                <div className="col-md-4 mb-3" key={`${id}-testimonial-${idx}`}>
                  <div className="item">
                    <TestimonialItem testimonial={testimonial} />
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default TestimonialsSection
