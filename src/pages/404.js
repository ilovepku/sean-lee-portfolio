import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import styles from './404.module.css';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className={styles.errorImageOverlay}>
      <div className={styles.errorImageContainer} />
      <h2 className={styles.errorImageText}>A Dog Ate this Page</h2>
    </div>
  </Layout>
);

export default NotFoundPage;
