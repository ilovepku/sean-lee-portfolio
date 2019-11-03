import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Layout from "../components/layout"
import photo from "../images/photo.jpg"
import { reqSocialSvgs } from "../utils/svgs.util"
import SEO from "../components/seo"

const ResumePage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
      allContactsJson {
        nodes {
          id
          icon
          url
          content
        }
      }
      allExpJson {
        nodes {
          id
          role
          company
          start
          end
          desc
        }
      }
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { glob: "**/src/pages/projects/*.md" }
          frontmatter: { featured: { ne: false } }
        }
        sort: { fields: [frontmatter___order], order: ASC }
      ) {
        nodes {
          id
          frontmatter {
            path
            name
            madeFor
            desc
          }
        }
      }
      allSkillsJson {
        nodes {
          id
          techs
        }
      }
      allSocialsJson(limit: 4) {
        nodes {
          id
          name
          url
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Resume" />
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading mb-3">Online Resume</h2>
          <Link className="btn btn-primary" to="/">
            <FontAwesomeIcon icon="file-pdf" className="mr-2" />
            Download PDF Version
          </Link>
        </div>
      </section>
      <div className="container px-3 px-lg-5">
        <article className="resume-wrapper mx-auto theme-bg-light p-5 mb-5 my-5 shadow-lg">
          <div className="resume-header">
            <div className="row align-items-center">
              <div className="resume-title col-12 col-md-6 col-lg-8 col-xl-9">
                <h2 className="resume-name mb-0 text-uppercase">
                  {data.site.siteMetadata.author}
                </h2>
                <div className="resume-tagline mb-3 mb-md-0">
                  Full-stack Developer / Mentor
                </div>
              </div>
              <div className="resume-contact col-12 col-md-6 col-lg-4 col-xl-3">
                <ul className="list-unstyled mb-0">
                  {data.allContactsJson.nodes.map(
                    ({ id, icon, url, content }, idx, arr) => (
                      <li
                        className={idx === arr.length ? "mb-0" : "mb-2"}
                        key={id}
                      >
                        <FontAwesomeIcon
                          icon={icon}
                          className="fa-fw fa-lg mr-2"
                        />
                        {url ? (
                          <a className="resume-link" href={url}>
                            {content}
                          </a>
                        ) : (
                          content
                        )}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </div>
          <hr />
          <div className="resume-intro">
            <div className="media flex-column flex-md-row align-items-center">
              <img
                className="resume-profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded-circle mx-auto"
                src={photo}
                alt=""
              />
              <div className="media-body text-left">
                <p className="mb-0">
                  I'm a self-taught full stack developer / mentor with
                  professional experience building web applications and coaching
                  junior developers. JavaScript, React, Redux, Gatsby, Node,
                  Express, MongoDB, MySQL, GraphQL, Firebase, D3 data
                  visualization, Python web scraping, and LAMP Admin are some of
                  my main skill sets. I have years of experience working in an
                  international team, and serving customers around the world. To
                  check out my work and get in touch, visit{" "}
                  <Link to="/" className="resume-link">
                    seanlee.netlify.com
                  </Link>
                  !
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="resume-body">
            <div className="row">
              <div className="resume-main col-12 col-lg-8 col-xl-9 pr-0 pr-lg-5">
                <section className="project-section">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Sample Projects
                  </h3>

                  {data.allMarkdownRemark.nodes.map(
                    ({ id, frontmatter: { path, name, madeFor, desc } }) => (
                      <div className="item mb-3" key={id}>
                        <div className="item-heading row align-items-center mb-2">
                          <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                            <Link to={path} className="theme-link">
                              {name}
                            </Link>
                          </h4>

                          <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                            {madeFor}
                          </div>
                        </div>
                        <div className="item-content">
                          <p>{desc}</p>
                        </div>
                      </div>
                    )
                  )}
                </section>

                <section className="work-section">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Work Experiences
                  </h3>
                  {data.allExpJson.nodes.map(
                    ({ id, role, company, start, end, desc }) => (
                      <div className="item mb-3" key={id}>
                        <div className="item-heading row align-items-center mb-2">
                          <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                            {role}
                          </h4>
                          <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                            {company} | {start} - {end ? end : "Present"}
                          </div>
                        </div>
                        <div className="item-content">
                          <p>{desc}</p>
                        </div>
                      </div>
                    )
                  )}
                </section>
              </div>
              <aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
                <section className="skills-section">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Skills
                  </h3>
                  <div className="item">
                    <ul className="list-unstyled resume-skills-list">
                      {data.allSkillsJson.nodes.map(
                        ({ id, techs }, idx, arr) => (
                          <li
                            className={`tech-icon rounded ${
                              idx === arr.length - 1 ? "" : "mb-2"
                            }`}
                            key={id}
                          >
                            {techs.map((tech, idx, arr) =>
                              idx === arr.length - 1 ? tech : tech + "/"
                            )}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </section>
                <section className="education-section">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Education
                  </h3>
                  <ul className="list-unstyled resume-education-list">
                    <li className="mb-3">
                      <div className="resume-degree font-weight-bold">
                        1800hr Full Stack Program
                      </div>
                      <div className="resume-degree-org text-muted">
                        <a
                          href="//https://www.topuniversities.com/universities/peking-university"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="theme-link"
                        >
                          freeCodeCamp
                        </a>
                      </div>
                      <div className="resume-degree-time text-muted">2018</div>
                    </li>
                    <li className="mb-3">
                      <div className="resume-degree font-weight-bold">
                        Graduate Coursework in English Literature
                      </div>
                      <div className="resume-degree-org text-muted">
                        <a
                          href="//https://www.topuniversities.com/universities/peking-university"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="theme-link"
                        >
                          Peking University
                        </a>
                      </div>
                      <div className="resume-degree-time text-muted">
                        2011 - 2014
                      </div>
                    </li>
                    <li className="">
                      <div className="resume-degree font-weight-bold">
                        BA in English Literature
                      </div>
                      <div className="resume-degree-org text-muted">
                        <a
                          href="//https://www.topuniversities.com/universities/peking-university"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="theme-link"
                        >
                          Peking University
                        </a>
                      </div>
                      <div className="resume-degree-time text-muted">
                        2007 - 2011
                      </div>
                    </li>
                  </ul>
                </section>
                <section className="skills-section">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Languages
                  </h3>
                  <ul className="list-unstyled resume-lang-list">
                    <li className="mb-2">
                      Chinese <span className="text-muted">(Native)</span>
                    </li>
                    <li className="mb-2">
                      English <span className="text-muted">(Advanced)</span>
                    </li>
                    <li>
                      German <span className="text-muted">(Intermediate)</span>
                    </li>
                  </ul>
                </section>
                <section className="skills-section">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Interests
                  </h3>
                  <ul className="list-unstyled resume-interests-list mb-0">
                    <li className="mb-2">Learning/Reading</li>
                    <li className="mb-2">Chess/Strategy Games</li>
                    <li>Music/Piano</li>
                  </ul>
                </section>
              </aside>
            </div>
          </div>
          <hr />
          <div className="resume-footer text-center">
            <ul className="resume-social-list list-inline mx-auto mb-0 d-inline-block text-muted">
              {data.allSocialsJson.nodes.map(({ id, name, url }, idx, arr) => (
                <li
                  className={`list-inline-item mb-lg-0 ${
                    idx === arr.length - 1 ? "mr-lg-3" : "mr-3"
                  }`}
                  key={id}
                >
                  <a className="theme-link" href={url}>
                    <img
                      alt=""
                      title={name}
                      src={reqSocialSvgs(`./${name}.svg`)}
                      className="mr-2"
                    />
                    <span className="d-none d-lg-inline-block">
                      {url && url.slice(2)}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </Layout>
  )
}

export default ResumePage
