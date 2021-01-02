import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Layout from '../components/layout';
import photo from '../images/photo.jpg';
import { reqSocialSvgs } from '../utils/svgs.util';
import pdf from '../assets/sean-lee-full-stack-resume-v1.3.1.pdf';
import SEO from '../components/seo';

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
          link
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
  `);
  return (
    <Layout>
      <SEO title="Resume" />
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading mb-3">Online Resume</h2>
          <a className="btn btn-primary" href={pdf} download>
            <FontAwesomeIcon icon="file-pdf" className="mr-2" />
            Download PDF Version
          </a>
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
                        className={idx === arr.length ? 'mb-0' : 'mb-2'}
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
                  I&apos;m a fullstack developer with hands-on experience
                  building production-level web and mobile applications from the
                  ground up. My strengths lie within React and its ecosystem
                  (Redux, Expo, Gatsby, etc.). I&apos;m familiar with React
                  design patterns, best practices, newer features, testing,
                  optimization, and how to implement them in real-life
                  situations. I&apos;ve also had backend practices building
                  RESTful APIs following a microservice architecture with
                  Node.js, MongoDB, and GraphQL, as well as going serverless
                  with Firebase.
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
                    ({ id, role, company, link, start, end, desc }) => (
                      <div className="item mb-3" key={id}>
                        <div className="item-heading row align-items-center mb-2">
                          <h4 className="item-title col-12 col-md-6 col-lg-8 mb-2 mb-md-0">
                            {role}
                          </h4>
                          <div className="item-meta col-12 col-md-6 col-lg-4 text-muted text-left text-md-right">
                            {link ? (
                              <a
                                href={link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="theme-link"
                              >
                                {company}
                              </a>
                            ) : (
                              company
                            )}
                            {` | ${start} - ${end || 'Present'}`}
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
                        ({ id, techs }, outIdx, outArr) => (
                          <li
                            className={`tech-icon rounded ${
                              outIdx === outArr.length - 1 ? '' : 'mb-2'
                            }`}
                            key={id}
                          >
                            {techs.map((tech, inIdx, inArr) =>
                              inIdx === inArr.length - 1 ? tech : `${tech}/`
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
                          href="//freecodecamp.org/ilovepku"
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
                          href="//www.topuniversities.com/universities/peking-university"
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
                          href="//www.topuniversities.com/universities/peking-university"
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
                      {`Chinese `}
                      <span className="text-muted">(Native)</span>
                    </li>
                    <li className="mb-2">
                      {`English `}
                      <span className="text-muted">(Advanced)</span>
                    </li>
                    <li>
                      {`German `}
                      <span className="text-muted">(Intermediate)</span>
                    </li>
                  </ul>
                </section>
                <section className="skills-section">
                  <h3 className="text-uppercase resume-section-heading mb-4">
                    Interests
                  </h3>
                  <ul className="list-unstyled resume-interests-list mb-0">
                    <li className="mb-2">Learning / Reading / Films</li>
                    <li className="mb-2">Chess / Yoga / Football</li>
                    <li>Music / Piano</li>
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
                    idx === arr.length - 1 ? 'mr-lg-3' : 'mr-3'
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
  );
};

export default ResumePage;
