import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutSection from "../components/about.section"
import OverviewSection from "../components/overview.section"
import PortfolioSection from "../components/portfolio.section"
import BlogSection from "../components/blog.section"
import TestimonialsSection from "../components/testimonials.sections"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <AboutSection />
    <OverviewSection />
    <PortfolioSection />
    <TestimonialsSection />
    <BlogSection />
  </Layout>
)

export default IndexPage
