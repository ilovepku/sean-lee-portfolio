import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import AboutSection from '../components/about.section';
import OverviewSection from '../components/overview.section';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AboutSection />
    <OverviewSection />
  </Layout>
);

export default IndexPage;
