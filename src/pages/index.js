import React from "react"

import Layout from "../components/layout"
import AboutSection from "../components/about.section"
import OverviewSection from "../components/overview.section"
import PortfolioSection from "../components/portfolio.section"
import BlogSection from "../components/blog.section"

const IndexPage = () => (
  <Layout>
    <AboutSection />
    <OverviewSection />
    <PortfolioSection />
    <BlogSection />
  </Layout>
)

export default IndexPage
