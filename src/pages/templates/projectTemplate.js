import React from 'react';
import PropTypes from 'prop-types';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from '../../components/layout';
import TestimonialItem from '../../components/testimonial.item';
import SEO from '../../components/seo';
import { reqWebDevSvgs } from '../../utils/svgs.util';

const ProjectTemplate = ({ data: { markdownRemark } }) => {
  if (markdownRemark) {
    const {
      html,
      frontmatter: {
        name,
        intro,
        pics,
        madeFor,
        links,
        code,
        highlights,
        techs,
        testimonial,
      },
    } = markdownRemark;

    return (
      <Layout>
        <SEO title={name} description={intro} />
        <section className="cta-section theme-bg-light py-5">
          <div className="container single-col-max-width">
            <h2 className="heading text-center">{name}</h2>
            <div className="project-intro text-center">
              <p className="mb-0 lead">{intro}</p>
            </div>
          </div>
        </section>
        <section className="project px-3 py-5 p-md-5">
          <div className="container">
            <div className="project-meta media flex-column flex-md-row p-4 theme-bg-light">
              {pics && pics.length > 1 ? (
                <Carousel
                  controls={false}
                  className="project-thumb mb-3 mb-md-0 mr-md-5 rounded d-none d-md-inline-block"
                >
                  {pics.map(({ childImageSharp: { id, fluid } }) => (
                    <Carousel.Item key={id}>
                      <Img fluid={fluid} />
                    </Carousel.Item>
                  ))}
                </Carousel>
              ) : (
                <Img
                  fluid={pics && pics[0].childImageSharp.fluid}
                  className="project-thumb mb-3 mb-md-0 mr-md-5 rounded d-none d-md-inline-block"
                />
              )}

              <div className="media-body">
                <div className="client-info">
                  <h3 className="client-name font-weight-bold mb-4">{name}</h3>
                  <ul className="client-meta list-unstyled">
                    {madeFor && (
                      <li className="mb-2">
                        <FontAwesomeIcon
                          icon="mug-hot"
                          className="fa-fw mr-2"
                        />
                        <strong>For: </strong>
                        {madeFor}
                      </li>
                    )}
                    {links && (
                      <li className="mb-2">
                        <FontAwesomeIcon icon="link" className="fa-fw mr-2" />
                        <strong>Links: </strong>
                        {links.map(({ label, url }) => (
                          <span className="mr-2" key={`link-${url}`}>
                            <a className="theme-link" href={url}>
                              {label}
                            </a>
                          </span>
                        ))}
                      </li>
                    )}
                    {code && (
                      <li className="mb-2">
                        <FontAwesomeIcon
                          icon="code-branch"
                          className="fa-fw mr-2"
                        />
                        <strong>Code: </strong>
                        <a className="theme-link" href={code.url}>
                          {code.label}
                        </a>
                      </li>
                    )}
                  </ul>
                  {highlights && (
                    <>
                      <h4 className="subheading mb-3">Technical Highlights</h4>
                      <ul className="mb-4">
                        {highlights.map(highlight => (
                          <li className="mb-2" key={highlight}>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  <h4 className="subheading mb-3">Technologies Used</h4>
                  <div className="webdev-icons row align-items-center">
                    {techs &&
                      techs.map(tech => (
                        <div
                          className="webdev-icon col-3 col-md-2 mr-0 mb-4"
                          key={tech}
                        >
                          <img
                            alt=""
                            title={tech}
                            className="img-fluid"
                            src={reqWebDevSvgs(`./${tech.toLowerCase()}.svg`)}
                          />
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
            <div
              className="project-sections py-5"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            {testimonial && testimonial.text && (
              <div className="project-section mb-5">
                <h3 className="project-section-title mb-3">Testimonial</h3>
                <div className="client-quote">
                  <TestimonialItem testimonial={testimonial} />
                </div>
              </div>
            )}
          </div>
        </section>

        <section className="promo-section theme-bg-light py-5 text-center">
          <div className="container single-col-max-width">
            <h2 className="title">Want me to help with your project?</h2>
            <p>Feel free to give me a holler!</p>
            <div className="text-center">
              <Link to="/contact" className="btn btn-primary">
                <FontAwesomeIcon icon="envelope-open-text" className="mr-2" />
                Contact Me
              </Link>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return null;
};

ProjectTemplate.propTypes = {
  data: PropTypes.exact({
    markdownRemark: PropTypes.exact({
      html: PropTypes.node.isRequired,
      frontmatter: PropTypes.shape({
        name: PropTypes.string.isRequired,
        intro: PropTypes.string.isRequired,
        pics: PropTypes.arrayOf(
          PropTypes.exact({
            childImageSharp: PropTypes.object.isRequired,
          })
        ),
        madeFor: PropTypes.string,
        links: PropTypes.arrayOf(
          PropTypes.shape({
            label: PropTypes.string,
            url: PropTypes.string,
          })
        ),
        code: PropTypes.shape({
          label: PropTypes.string,
          url: PropTypes.string,
        }),
        highlights: PropTypes.arrayOf(PropTypes.string.isRequired),
        techs: PropTypes.arrayOf(PropTypes.string.isRequired),
        testimonial: PropTypes.exact({
          text: PropTypes.string.isRequired,
          avatar: PropTypes.exact({
            childImageSharp: PropTypes.object,
          }),
          person: PropTypes.string,
          position: PropTypes.string,
          company: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};

export default ProjectTemplate;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        name
        intro
        pics {
          childImageSharp {
            id
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        madeFor
        links {
          label
          url
        }
        code {
          label
          url
        }
        highlights
        techs
        testimonial {
          text
          avatar {
            childImageSharp {
              id
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
`;
