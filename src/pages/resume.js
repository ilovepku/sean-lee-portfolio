import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Layout from "../components/layout"
import profile from "../images/profile.png"
import { reqSvgs } from "../utils/svgs.util"

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
          bullets
        }
      }
      allMarkdownRemark(
        filter: {
          fileAbsolutePath: { glob: "**/src/pages/projects/*.md" }
          frontmatter: { testimonial: { text: { ne: "" } } }
        }
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
      allSocialsJson(limit: 3) {
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
                  Senior Software Engineer
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
          <div className="resume-intro py-3">
            <div className="media flex-column flex-md-row align-items-center">
              <img
                className="resume-profile-image mb-3 mb-md-0 mr-md-5 ml-md-0 rounded-circle mx-auto"
                src={profile}
                alt=""
              />
              <div className="media-body text-left">
                <p className="mb-0">
                  Summarise your career here. Donec quam felis, ultricies nec,
                  pellentesque eu. Lorem ipsum dolor sit amet, consectetuer
                  adipiscing elit. Aenean commodo ligula eget dolor. Aenean
                  massa. Cum sociis natoque penatibus et magnis dis parturient
                  montes, nascetur ridiculus mus. Donec quam felis, ultricies
                  nec, pellentesque eu, pretium quis, sem. Maecenas nec odio et
                  ante tincidunt tempus. Donec vitae sapien ut libero venenatis
                  faucibus. Nullam quis ante. Etiam sit amet orci eget eros
                  faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet
                  nibh.
                </p>
              </div>
            </div>
          </div>
          <hr />
          <div className="resume-body">
            <div className="row">
              <div className="resume-main col-12 col-lg-8 col-xl-9 pr-0 pr-lg-5">
                <section className="work-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Work Experiences
                  </h3>
                  {data.allExpJson.nodes.map(
                    ({ id, role, company, start, end, desc, bullets }) => (
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
                          {bullets.length ? (
                            <ul className="resume-list">
                              {bullets.map((bullet, idx) => (
                                <li key={`${id}-bullet-${idx}`}>{bullet}</li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      </div>
                    )
                  )}
                </section>

                <section className="project-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Projects
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
              </div>
              <aside className="resume-aside col-12 col-lg-4 col-xl-3 px-lg-4 pb-lg-4">
                <section className="skills-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Skills
                  </h3>
                  <div className="item">
                    <h4 className="item-title">Technical</h4>
                    <ul className="list-unstyled resume-skills-list">
                      <li className="mb-2">JavaScript/Angular/React/Vue</li>
                      <li className="mb-2">Python/Ruby/PHP</li>
                      <li className="mb-2">Node.js/ASP.NET</li>
                      <li className="mb-2">PostgreSQL/MySQL</li>
                      <li className="mb-2">Object-oriented design</li>
                      <li className="mb-2">
                        Design and implement database structures
                      </li>
                      <li>Lead and deliver complex software systems</li>
                    </ul>
                  </div>
                  <div className="item">
                    <h4 className="item-title">Professional</h4>
                    <ul className="list-unstyled resume-skills-list">
                      <li className="mb-2">Effective communication</li>
                      <li className="mb-2">Team player</li>
                      <li className="mb-2">Strong problem solver</li>
                      <li>Good time management</li>
                    </ul>
                  </div>
                </section>
                <section className="education-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Education
                  </h3>
                  <ul className="list-unstyled resume-education-list">
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
                <section className="skills-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Languages
                  </h3>
                  <div className="item">
                    <h4 className="item-title">
                      Chinese<span className="text-muted"> (Native)</span>
                    </h4>
                    <ul className="list-unstyled resume-skills-list" />
                  </div>
                  <div className="item">
                    <h4 className="item-title">
                      English
                      <span className="text-muted"> (Advanced)</span>
                    </h4>
                    <ul className="list-unstyled resume-skills-list">
                      <li className="mb-2">Bachelor Degree</li>
                      <li>Graduate Coursework</li>
                    </ul>
                  </div>
                  <div className="item">
                    <h4 className="item-title">
                      German
                      <span className="text-muted"> (Intermediate)</span>
                    </h4>
                    <ul className="list-unstyled resume-skills-list">
                      <li className="mb-2">
                        Graduate Level 3rd Language Courses
                      </li>
                      <li>Duolingo Course with Full Skill Levels</li>
                    </ul>
                  </div>
                </section>
                <section className="skills-section py-3">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Interests
                  </h3>
                  <ul className="list-unstyled resume-interests-list mb-0">
                    <li className="mb-2">Reading</li>
                    <li className="mb-2">Piano</li>
                    <li className="mb-2">Chess</li>
                    <li>Football</li>
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
                      src={reqSvgs(`./${name}.svg`)}
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
