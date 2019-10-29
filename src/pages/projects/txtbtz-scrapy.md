---
path: "/portfolio/txtbtz-scrapy"
type: "other production"
order: 200
name: "Python Web Scraper"
intro: "Web scraper for product listing info from a goverment website"
pics: [../../images/projects/scrapy/scrapy-txtbtz.png]
madeFor: "Broadlink Supply Chain Co., Ltd"
url:
code: "//github.com/ilovepku/scrapy-for-txtbtz.cnca.gov.cn"
desc: "Challenaged myself by taking this quick freelance job without any prior web scraping experience. Taught myself Python and Scrapy fundamentals, then coded a crawler script within a week, which extracted nearly 1 million entries of product/producer data and images from a government website, with all info stored in a MySQL database with multilayerd one-to-many relationship models, accompanied by a 66-page PDF of product listing data tables."
highlights:
  [
    "multilayered one-to-many relationship data",
    "scraped data stored in a MySQL database",
  ]
techs: ["Python", "Scrapy", "MySQL"]
testimonial: { text: "" }
featured: true
---

## Overview

Challenaged myself to something I had almost no prior experience with (web scraping) but knew was definitly possible, by accepting my first real coding contract job on a tight schedule. Felt a bit crazy at first, but everything began to fall into place once I started with researching and teaching myself the necessary pieces to the puzzle. The whole project turned out to be a great boost to my confidence which made me see myself working in tech related field a possibility.

## The Challenge

- No previous Python or web scraping experience
- High number of data entries and media files to be scraped
- Multiple levels of one-to-many relationship data to be scraped
- Client wanted scraped data stored in a database for various future uses
- Target is a poorly coded goverment website with bad labeling for most of the data fields
- Tight time schedule of one week

## The Approach & Solution

Taught myself from scratch Python foundations and the web scraping framework Scrapy, chose MySQL as the database soluiton and reviewed relevant SQL syntaxes, divided the 4 different levels of information into 3 planned database tables and a media folder, mapped the messy parts of data with their relative(sometimes newly created) field names, coded and tested the scraping script with the desired data successfully scraped, all done within the narrow time frame of a week.

## The Results

##### 2.5k \* Company Info scraped into a MySQL database table of companies

![? * Company Info Scraped](../../images/projects/scrapy/scrapy-txtbtz-companies.png "Company Info Scraped")

---

##### 10k \* Product Info scraped into a MySQL database table of products

![? * Product Info Scraped](../../images/projects/scrapy/scrapy-txtbtz-products.png "Product Info Scraped")

---

##### 40k \* Image Info scraped into a MySQL database table of images

![40k * Image Info Scraped](../../images/projects/scrapy/scrapy-txtbtz-image-info.png "Image Info Scraped")

---

##### 40k \* Image Files scraped into a media folder

![40k * Image Files Scraped](../../images/projects/scrapy/scrapy-txtbtz-image-files.png "Image Files Scraped")

---

##### 66-page PDF of product listing data tables

![Product Listing Data Tables in PDF](../../images/projects/scrapy/scrapy-txtbtz-pdf.jpg "Product Listing Data Tables in PDF")
