import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

// webpack feature: function mapping all *.svg paths to the actual data:image
const reqSvgs = require.context("../images/webdev-icons", true, /\.svg$/)

const OverviewSection = () => {
  const data = useStaticQuery(graphql`
    query {
      allSkillsJson {
        nodes {
          id
          name
          techs
          desc
        }
      }
    }
  `)
  return (
    <section className="overview-section p-3 p-lg-5">
      <div className="container">
        <h2 className="section-title font-weight-bold mb-3">What I do</h2>
        <div className="section-intro mb-5">
          I have more than X years' experience building software for clients all
          over the world. Below is a quick overview of my main technical skill
          sets and technologies I use. Want to find out more about my
          experience? Check out my <Link to="/resume">online resume</Link> and{" "}
          <Link to="/portfolio">project portfolio</Link>.
        </div>
        <div className="row">
          {data.allSkillsJson.nodes.map(({ id, name, techs, desc }) => (
            <div className="item col-6 col-lg-3" key={id}>
              <div className="item-inner">
                <div className="item-icon">
                  {techs.map((tech, idx, arr) => (
                    <img
                      key={id + "_tech_" + idx}
                      alt=""
                      title={tech}
                      className={`tech-icon rounded ${
                        idx === arr.length - 1 ? "" : "mr-2"
                      }`}
                      src={reqSvgs(`./${tech.toLowerCase()}.svg`)}
                    />
                  ))}
                </div>
                <h3 className="item-title">{name}</h3>
                <div className="item-desc">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OverviewSection
