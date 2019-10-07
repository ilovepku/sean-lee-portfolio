import React from "react"

const PromoSection = () => {
  return (
    <section className="promo-section theme-bg-light py-5 text-center">
      <div className="container single-col-max-width">
        <h2 className="title">Promo Section Heading</h2>
        <p>
          You can use this section to promote your side projects etc. Lorem
          ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
          ligula eget dolor. Aenean massa.
        </p>
        <figure className="promo-figure">
          <a
            href="https://made4dev.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="img-fluid" src="/images/promo-banner.jpg" alt="" />
          </a>
        </figure>
      </div>
    </section>
  )
}

export default PromoSection
