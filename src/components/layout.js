/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUser,
  faLaptopCode,
  faFileAlt,
  faBlog,
  faEnvelopeOpenText,
  faAdjust,
  faArrowAltCircleRight,
  faEye,
  faFilePdf,
  faQuoteLeft,
  faPhoneSquare,
  faEnvelopeSquare,
  faGlobe,
  faMapMarkerAlt,
  faMugHot,
  faLink,
  faCodeBranch,
  faLongArrowAltLeft,
  faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';

import '../css/bootstrap.min.css';
import '../css/theme.css';
import '../css/svg.css';

import Header from './header';
import Footer from './footer';

library.add(
  // menu items
  faUser,
  faLaptopCode,
  faFileAlt,
  faBlog,
  // contact me button
  faEnvelopeOpenText,
  // dark mode label
  faAdjust,
  // view portfolio button
  faArrowAltCircleRight,
  faEye,
  // download pdf button
  faFilePdf,
  // testimonials
  faQuoteLeft,
  // resume contacts
  faPhoneSquare,
  faEnvelopeSquare,
  faGlobe,
  faMapMarkerAlt,
  // project overview
  faMugHot,
  faLink,
  faCodeBranch,
  // blog pagination buttons
  faLongArrowAltLeft,
  faLongArrowAltRight
);

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="main-wrapper">
        {children}
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
