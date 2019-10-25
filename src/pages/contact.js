import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import { reqSvgs } from "../utils/svgs.util"
import SEO from "../components/seo"

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          email
        }
      }
      allSocialsJson {
        nodes {
          id
          name
          url
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Contact" />
      <section className="cta-section theme-bg-light py-5">
        <div className="container text-center single-col-max-width">
          <h2 className="heading">Contact</h2>
          <div className="intro">
            <p>
              Thanks for taking the time to reach out. How can I help you today?
              You can fill in the contact form below or send me an email to{" "}
              <a href="mailto:#">{data.site.siteMetadata.email}</a>
            </p>
            <p>
              Want to get connected? Follow me on the social channels below.
            </p>
            <ul className="list-inline mb-0">
              {data.allSocialsJson.nodes.map(({ id, name, url }, idx, arr) => (
                <li
                  className={`list-inline-item ${
                    idx === arr.length - 1 ? "" : "mr-3"
                  }`}
                  key={id}
                >
                  <a href={url}>
                    <img alt="" title={name} src={reqSvgs(`./${name}.svg`)} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <section className="contact-section px-3 py-5 p-md-5">
        <div className="container">
          <form
            id="contact-form"
            name="contact-form"
            className="contact-form col-lg-8 mx-lg-auto"
            method="post"
            data-netlify="true"
          >
            <h3 className="text-center mb-3">Get In Touch</h3>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label className="sr-only" htmlFor="cname">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cname"
                  name="name"
                  placeholder="Name"
                  minLength="2"
                  required=""
                  aria-required="true"
                />
              </div>
              <div className="form-group col-md-6">
                <label className="sr-only" htmlFor="cemail">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="cemail"
                  name="email"
                  placeholder="Email"
                  required=""
                  aria-required="true"
                />
              </div>
              <div className="form-group col-12">
                <label className="sr-only" htmlFor="cmessage">
                  Your message
                </label>
                <textarea
                  className="form-control"
                  id="cmessage"
                  name="message"
                  placeholder="Enter your message"
                  rows="10"
                  required=""
                  aria-required="true"
                ></textarea>
              </div>
              <div className="form-group col-12">
                <button
                  type="submit"
                  className="btn btn-block btn-primary py-2"
                >
                  Send Now
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  )
}

export default ContactPage
