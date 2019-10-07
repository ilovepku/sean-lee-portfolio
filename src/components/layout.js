/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import "./bootstrap.min.css"
import "./theme.css"
import "./svg.css"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import {
  faUser,
  faLaptopCode,
  faFileAlt,
  faBlog,
  faEnvelopeOpenText,
  faPaperPlane,
  faAdjust,
  faArrowAltCircleRight,
  faEye,
  faFilePdf,
  faPhoneSquare,
  faEnvelopeSquare,
  faGlobe,
  faMapMarkerAlt,
  faIndustry,
  faUsers,
  faLink,
  faQuoteLeft,
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from "@fortawesome/free-solid-svg-icons"
library.add(
  fab,
  faUser,
  faLaptopCode,
  faFileAlt,
  faBlog,
  faEnvelopeOpenText,
  faPaperPlane,
  faAdjust,
  faArrowAltCircleRight,
  faEye,
  faFilePdf,
  faPhoneSquare,
  faEnvelopeSquare,
  faGlobe,
  faMapMarkerAlt,
  faIndustry,
  faUsers,
  faLink,
  faQuoteLeft,
  faLongArrowAltLeft,
  faLongArrowAltRight
)

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="main-wrapper">
        {children} <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
