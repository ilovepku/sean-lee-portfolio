---
path: '/blogs/isotope-react'
date: 'Fri Oct 18 2019 22:00:00 GMT+0800 (China Standard Time)'
title: 'Isotope in React with Ease'
pic: ../../images/blogs/isotope.png
intro: 'With a couple of hooks, you can easily make the filter & sort layout library Isotope work in React.'
---

![Isotope](../../images/blogs/isotope.png 'Isotope')

## The Challenge

[Isotope](https://www.npmjs.com/package/isotope-layout) is a JavaScript library that can provide an animated, filterable/sortable layout for a list of HTML elements. A demo of the effect can be seen on either its [official website](https://isotope.metafizzy.co/).
or the portfolio page of [this same very site](/portfolio).

It's a quite handy tool, and the animations look cool, but the problem is that it was quite a dated library, first introduced back in the days of jQuery, hence not as well suited to be used together with a modern front end framework like React. Though the official documentation has chapters on initializing Isotope with both vanilla JS and HTML, nothing on using it with React has been given.

## Previous Takes

There haven't been many discussions on this topic. Some of the top hits that a quick Google search for "isotope and react" returns are ["React.js with Isotope and Flux"](https://developers.redhat.com/blog/2016/01/07/react-js-with-isotope-and-flux/) which is more than 3 years old and involves using an extra library, [
"How to make Isotope work in a Gatsby site"](https://www.amithraravi.com/articles/tech/how-to-make-isotope-work-in-a-gatsby-site/) which is quite new and somewhat enlightening, but simply has too many repetitive or unnecessary code. [The StackOverflow question "React.js and Isotope.js"](https://stackoverflow.com/questions/25135261/react-js-and-isotope-js) provides several interesting answers, yet again either not working anymore due to datedness or containing no longer recommended methods like `ReactDOM.findDOMNode`. It's certainly time for an easy, up-to-date, and most importantly a working solution.

## My Approach & Solution

Below is a barebone example of my take on the problem on Codepen using `useState` and `useEffect` hooks, features newly added into React 16.8 this very year.

<iframe height="265" style="width: 100%;" scrolling="no" title="Isotope and React (w/ Hooks)" src="https://codepen.io/ilovepku/embed/zYYKaYy?height=265&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ilovepku/pen/zYYKaYy'>Isotope and React (w/ Hooks)</a> by Sean Lee
  (<a href='https://codepen.io/ilovepku'>@ilovepku</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Firstly, we create two states with `useState`:

```jsx
// state for storing the isotope object, with an initial value of null
const [isotope, setIsotope] = React.useState(null);
// state for storing the filter keyword, with an initial value of *, which matches everything
const [filterKey, setFilterKey] = React.useState('*');
```

Next, we initialize Isotope with configs after the component is mounted with the first `useEffect`:

```jsx
React.useEffect(() => {
  setIsotope(
    new Isotope('.filter-container', {
      // filter-container: className of the parent of the isotope elements
      itemSelector: '.filter-item', // filter-item: className of the isotope elements
      layoutMode: 'fitRows', // for horizontal isotope
    })
  );
}, []); // [] makes this useEffect work like a componentDidMount in a class component
```

Then, we have another `useEffect` handling filter key change, calling the `arrange` method of the isotope object to reorganize the item layout when a change to the filterKey is detected:

```jsx
React.useEffect(() => {
  if (isotope) {
    // sanity check
    filterKey === '*'
      ? isotope.arrange({ filter: `*` })
      : isotope.arrange({ filter: `.${filterKey}` });
  }
}, [isotope, filterKey]);
```

The `[isotope, filterKey]` makes this useEffect work like an

```jsx
componentDidUpdate(prevProps, prevState) {
  if (prevState.filterKey !== this.state.filterKey) {
    // do the thing
  }
}
```

Last but not least, here comes:

```jsx
<ul>
  <li onClick={() => setFilterKey('*')}>Show Both</li>
  <li onClick={() => setFilterKey('vege')}>Show Veges</li>
  <li onClick={() => setFilterKey('fruit')}>Show Fruits</li>
</ul>
```

to change the filterKey state when clicked, and:

```jsx
<ul className="filter-container">
  <div className="filter-item vege">
    <span>Cucumber</span>
  </div>
  <div className="filter-item fruit">
    <span>Apple</span>
  </div>
  <div className="filter-item fruit">
    <span>Orange</span>
  </div>
  <div className="filter-item fruit vege">
    <span>Tomato</span>
  </div>
</ul>
```

the isotope items with their respective filter keywords "fruit" and "vege".

## The Results

A simple, modern solution to using isotope with React that works with both static items or dynamically generated items, you are welcome to give it a try, thank you for your time!
