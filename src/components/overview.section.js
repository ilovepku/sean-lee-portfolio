import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { reqWebDevSvgs } from '../utils/svgs.util';

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
  `);
  return (
    <section className="overview-section p-3 p-lg-5">
      <div className="container">
        <h2 className="section-title font-weight-bold mb-3">What I do</h2>
        <div className="section-intro mb-5">
          I work professionally as a full stack developer, build interesting pet
          projects, contribute to open source, and mentor aspiring coders. Below
          is a quick overview of my main technical skill sets and the
          technologies I use.
        </div>
        <div className="row">
          {data.allSkillsJson.nodes.map(({ id, name, techs, desc }) => (
            <div className="item col-6 col-lg-3" key={id}>
              <div className="item-inner">
                <div className="item-icon">
                  {techs.map((tech, idx, arr) => (
                    <img
                      key={tech}
                      alt=""
                      title={tech}
                      className={`tech-icon rounded ${
                        idx === arr.length - 1 ? '' : 'mr-2'
                      }`}
                      src={reqWebDevSvgs(`./${tech.toLowerCase()}.svg`)}
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
  );
};

export default OverviewSection;
