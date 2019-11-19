import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "../components/container"
import styles from "./404.module.css"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Container>
      <div className={styles.errorImageOverlay}>
        <div className={styles.errorImageContainer}></div>
        <h2 className={styles.errorImageText}>A Dog Ate this Page</h2>
      </div>
    </Container>
  </Layout>
)

export default NotFoundPage
