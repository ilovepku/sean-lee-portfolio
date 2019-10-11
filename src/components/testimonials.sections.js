import React from "react"
import { Carousel } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import testimonialMale from "../images/testimonials-male.jpg"

const TestimonialsSection = () => {
  return (
    <>
      <div className="container">
        <hr />
      </div>
      <section className="testimonials-section p-3 p-lg-5">
        <div className="container">
          <h2 className="section-title font-weight-bold mb-5">Testimonials</h2>
          <Carousel
            controls={false}
            className="testimonial-carousel owl-carousel owl-theme"
          >
            {Array.from({ length: 3 }).map((_, i) => (
              <Carousel.Item className="item" key={i}>
                <div className="quote-holder">
                  <blockquote className="quote-content">
                    Simon is a brilliant software engineer! Lorem ipsum dolor
                    sit amet, consectetuer adipiscing elit. Aenean commodo
                    ligula eget dolor. Aenean massa. Cum sociis natoque
                    penatibus et magnis.
                  </blockquote>
                  <FontAwesomeIcon icon="quote-left" />
                </div>
                <div className="source-holder">
                  <div className="source-profile">
                    <img src={testimonialMale} alt="" />
                  </div>
                  <div className="meta">
                    <div className="name">John Doe</div>
                    <div className="info">Project Manager, Company</div>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </section>
    </>
  )
}

export default TestimonialsSection
