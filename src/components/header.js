import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { Navbar } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import profile from "../images/profile.png"
import { reqSvgs } from "../utils/svgs.util"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
      allSocialsJson(limit: 6) {
        nodes {
          id
          name
          url
        }
      }
      allMenuJson {
        nodes {
          id
          name
          icon
          url
          deeper
        }
      }
    }
  `)
  const { author } = data.site.siteMetadata

  // apply active menu item style to deeper routes
  const isPartiallyActive = ({ isPartiallyCurrent }) =>
    isPartiallyCurrent
      ? { className: "nav-link active" }
      : { className: "nav-link" }
  const PartialNavLink = props => (
    <Link getProps={isPartiallyActive} {...props} />
  )

  // dark mode related
  const [darkmodeToggle, setDarkmodeToggle] = useState(false)
  useEffect(() => {
    setDarkmodeToggle(
      localStorage.getItem("darkmodeToggle") === "true" ? true : false
    )
  }, [])

  const handleDarkmodeChange = ({ target: { checked } }) => {
    setDarkmodeToggle(checked)
    localStorage.setItem("darkmodeToggle", checked)
  }

  return (
    <>
      <Helmet>
        <body className={darkmodeToggle ? "dark-mode" : ""} />
      </Helmet>
      <header className="header text-center">
        <div className="force-overflow">
          <h1 className="blog-name pt-lg-4 mb-0">
            <Link to="/">{author}</Link>
          </h1>

          <Navbar expand="lg" className="navbar-dark">
            <Navbar.Toggle aria-controls="navigation" />

            <Navbar.Collapse id="navigation" className="flex-column">
              <div className="profile-section pt-3 pt-lg-0">
                <img
                  className="profile-image mb-3 rounded-circle mx-auto"
                  src={profile}
                  alt=""
                />

                <div className="bio mb-3">
                  Hi, my name is {author} and I'm an aspiring senior full stack
                  developer. Welcome to my personal website!
                </div>
                <ul className="social-list list-inline py-2 mx-auto">
                  {data.allSocialsJson.nodes.map(({ id, name, url }) => (
                    <li className="list-inline-item" key={id}>
                      <a href={url}>
                        <img
                          alt=""
                          title={name}
                          src={reqSvgs(`./${name}.svg`)}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
                <hr />
              </div>

              <ul className="navbar-nav flex-column text-left">
                {data.allMenuJson.nodes.map(({ id, url, icon, name, deeper }) =>
                  deeper ? (
                    <li className="nav-item" key={id}>
                      <PartialNavLink to={url}>
                        <FontAwesomeIcon icon={icon} className="fa-fw mr-2" />
                        {name}
                      </PartialNavLink>
                    </li>
                  ) : (
                    <li className="nav-item" key={id}>
                      <Link
                        className="nav-link"
                        activeClassName="active"
                        to={url}
                      >
                        <FontAwesomeIcon icon={icon} className="fa-fw mr-2" />
                        {name}
                      </Link>
                    </li>
                  )
                )}
              </ul>

              <div className="dark-mode-toggle text-center w-100">
                <hr className="mb-4" />
                <h4 className="toggle-name mb-3 ">
                  <FontAwesomeIcon icon="adjust" className="mr-1" />
                  Dark Mode
                </h4>

                <input
                  className="toggle"
                  id="darkmode"
                  type="checkbox"
                  checked={darkmodeToggle}
                  onChange={handleDarkmodeChange}
                />
                <label
                  className="toggle-btn mx-auto mb-0"
                  htmlFor="darkmode"
                ></label>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </header>
    </>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
