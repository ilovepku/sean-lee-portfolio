import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <footer className="footer text-center py-4">
      <div>
        <small className="copyright">
          {`Copyright ${new Date().getFullYear()} by `}
          <Link to="/contact">{data.site.siteMetadata.author}</Link>
        </small>
      </div>
      <div>
        <small className="copyright">
          {`Theme designs from `}
          <a
            className=""
            href="//github.com/xriley"
            target="_blank"
            rel="noopener noreferrer"
          >
            Xiaoying Riley
          </a>
        </small>
      </div>
    </footer>
  );
};

export default Footer;
