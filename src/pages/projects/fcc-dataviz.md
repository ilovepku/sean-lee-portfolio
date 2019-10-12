---
path: "/portfolio/fcc-dataviz"
date: "2019-05-04"
type: "dataviz practice"
name: "Data Visualization Projects"
intro: "5 data visualization projects, part of freeCodeCamp's curriculum"
pics: [../../images/projects/dataviz.jpg]
madeFor: "Practice: freeCodeCamp"
url: "//codepen.io/collection/nMoKdK"
github: "//"
desc: "Responsive data visualizations with D3.js, Javascript, and CSS"
highlights: []
techs: ["D3", "JavaScript", "CSS", "Codepen"]
---

## Choropleth Map

<iframe height="565" style="width: 100%;" scrolling="no" title="FCC: Dataviz - Choropleth Map" src="https://codepen.io/ilovepku/embed/xmgXJo?height=565&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ilovepku/pen/xmgXJo'>FCC: Dataviz - Choropleth Map</a> by Sean Lee
  (<a href='https://codepen.io/ilovepku'>@ilovepku</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

User Stories

1. My choropleth should have a title with a corresponding id="title".
1. My choropleth should have a description element with a corresponding id="description"
1. My choropleth should have counties with a corresponding class="county" that represent the data.
1. There should be at least 4 different fill colors used for the counties.
1. My counties should each have data-fips and data-education properties containing their corresponding fips and education values.
1. My choropleth should have a county for each provided data point.
1. The counties should have data-fips and data-education values that match the sample data.
1. My choropleth should have a legend with a corresponding id="legend".
1. There should be at least 4 different fill colors used for the legend.
1. I can mouse over an area and see a tooltip with a corresponding id="tooltip" which displays more information about the area.
1. My tooltip should have a data-education property that corresponds to the data-education of the active area.

## Heat Map

<iframe height="485" style="width: 100%;" scrolling="no" title="FCC: Dataviz - Heat Map" src="https://codepen.io/ilovepku/embed/qLmQVW?height=485&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ilovepku/pen/qLmQVW'>FCC: Dataviz - Heat Map</a> by Sean Lee
  (<a href='https://codepen.io/ilovepku'>@ilovepku</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

User Stories

1. My heat map should have a title with a corresponding id="title".
1. My heat map should have a description with a corresponding id="description".
1. My heat map should have an x-axis with a corresponding id="x-axis".
1. My heat map should have a y-axis with a corresponding id="y-axis".
1. My heat map should have rect elements with a class="cell" that represent the data.
1. There should be at least 4 different fill colors used for the cells.
1. Each cell will have the properties data-month, data-year, data-temp containing their corresponding month, year, and temperature values.
1. The data-month, data-year of each cell should be within the range of the data.
1. My heat map should have cells that align with the corresponding month on the y-axis.
1. My heat map should have cells that align with the corresponding year on the x-axis.
1. My heat map should have multiple tick labels on the y-axis with the full month name.
1. My heat map should have multiple tick labels on the x-axis with the years between 1754 and 2015.
1. My heat map should have a legend with a corresponding id="legend".
1. My legend should contain rect elements.
1. The rect elements in the legend should use at least 4 different fill colors.
1. I can mouse over an area and see a tooltip with a corresponding id="tooltip" which displays more information about the area.
1. My tooltip should have a data-year property that corresponds to the data-year of the active area.

## Treemap Diagram

<iframe height="505" style="width: 100%;" scrolling="no" title="FCC: Dataviz - Treemap Diagram" src="https://codepen.io/ilovepku/embed/VqWPMY?height=505&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ilovepku/pen/VqWPMY'>FCC: Dataviz - Treemap Diagram</a> by Sean Lee
  (<a href='https://codepen.io/ilovepku'>@ilovepku</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

User Stories

1. My tree map should have a title with a corresponding id="title".
1. My tree map should have a description with a corresponding id="description".
1. My tree map should have rect elements with a corresponding class="tile" that represent the data.
1. There should be at least 2 different fill colors used for the tiles.
1. Each tile should have the properties data-name, data-category, and data-value containing their corresponding name, category, and value.
1. The area of each tile should correspond to the data-value amount: tiles with a larger data-value should have a bigger area.
1. My tree map should have a legend with corresponding id="legend".
1. My legend should have rect elements with a corresponding class="legend-item".
1. The rect elements in the legend should use at least 2 different fill colors.
1. I can mouse over an area and see a tooltip with a corresponding id="tooltip" which displays more information about the area.
1. My tooltip should have a data-value property that corresponds to the data-value of the active area.

## Scatterplot Graph

<iframe height="485" style="width: 100%;" scrolling="no" title="FCC: Dataviz - Scatterplot Graph" src="https://codepen.io/ilovepku/embed/romBdd?height=485&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ilovepku/pen/romBdd'>FCC: Dataviz - Scatterplot Graph</a> by Sean Lee
  (<a href='https://codepen.io/ilovepku'>@ilovepku</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

User Stories

1. I can see a title element that has a corresponding id="title".
1. I can see an x-axis that has a corresponding id="x-axis".
1. I can see a y-axis that has a corresponding id="y-axis".
1. I can see dots, that each have a class of dot, which represent the data being plotted.
1. Each dot should have the properties data-xvalue and data-yvalue containing their corresponding x and y values.
1. The data-xvalue and data-yvalue of each dot should be within the range of the actual data and in the correct data format. For data-xvalue, integers (full years) or Date objects are acceptable for test evaluation. For data-yvalue (minutes), use Date objects.
1. The data-xvalue and its corresponding dot should align with the corresponding point/value on the x-axis.
1. The data-yvalue and its corresponding dot should align with the corresponding point/value on the y-axis.
1. The data-yvalue and its corresponding dot should align with the corresponding point/value on the y-axis.
1. I can see multiple tick labels on the y-axis with %M:%S time format.
1. I can see multiple tick labels on the x-axis that show the year.
1. I can see that the range of the x-axis labels are within the range of the actual x-axis data.
1. I can see that the range of the y-axis labels are within the range of the actual y-axis data.
1. I can see a legend containing descriptive text that has id="legend".
1. I can mouse over an area and see a tooltip with a corresponding id="tooltip" which displays more information about the area.
1. My tooltip should have a data-year property that corresponds to the data-xvalue of the active area.

## Bar Chart

<iframe height="485" style="width: 100%;" scrolling="no" title="FCC: Dataviz - Bar Chart" src="https://codepen.io/ilovepku/embed/LMbJaq?height=485&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ilovepku/pen/LMbJaq'>FCC: Dataviz - Bar Chart</a> by Sean Lee
  (<a href='https://codepen.io/ilovepku'>@ilovepku</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

User Stories

1. My chart should have a title with a corresponding id="title".
1. My chart should have a g element x-axis with a corresponding id="x-axis".
1. My chart should have a g element y-axis with a corresponding id="y-axis".
1. Both axes should contain multiple tick labels, each with the corresponding class="tick".
1. My chart should have a rect element for each data point with a corresponding class="bar" displaying the data.
1. Each bar should have the properties data-date and data-gdp containing date and GDP values.
1. The bar elements' data-date properties should match the order of the provided data.
1. The bar elements' data-gdp properties should match the order of the provided data.
1. Each bar element's height should accurately represent the data's corresponding GDP.
1. The data-date attribute and its corresponding bar element should align with the corresponding value on the x-axis.
1. The data-gdp attribute and its corresponding bar element should align with the corresponding value on the y-axis.
1. I can mouse over an area and see a tooltip with a corresponding id="tooltip" which displays more information about the area.
1. My tooltip should have a data-date property that corresponds to the data-date of the active area.
