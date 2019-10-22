---
path: "/portfolio/fcc-frontend"
date: "2019-05-04"
type: "frontend practice"
name: "FCC Front End Practice Projects"
intro: "5 frontend practice projects, part of freeCodeCamp's curriculum"
pics: [../../images/projects/frontend.jpg]
madeFor: "freeCodeCamp"
url: "//codepen.io/collection/XRgbBK"
code: "//codepen.io/collection/XRgbBK"
desc: "Pomodoro Clock, Calculator, Drum Machine, Random Quote Machine, and Markdown Previewer, built with React."
highlights:
techs: ["React", "Bootstrap", "JavaScript", "CSS", "Codepen"]
testimonial: { text: "" }
featured: false
---

## Pomodoro Clock

<iframe height="385" style="width: 100%;" scrolling="no" title="FCC: Frontend - Pomodoro Clock" src="https://codepen.io/ilovepku/embed/jXBRwg?height=386&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ilovepku/pen/jXBRwg'>FCC: Frontend - Pomodoro Clock</a> by Sean Lee
  (<a href='https://codepen.io/ilovepku'>@ilovepku</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

User Stories

1. I can see an element with id="break-label" that contains a string (e.g. "Break Length").
1. I can see an element with id="session-label" that contains a string (e.g. "Session Length").
1. I can see two clickable elements with corresponding IDs: id="break-decrement" and id="session-decrement".
1. I can see two clickable elements with corresponding IDs: id="break-increment" and id="session-increment".
1. I can see an element with a corresponding id="break-length", which by default (on load) displays a value of 5.
1. I can see an element with a corresponding id="session-length", which by default displays a value of 25.
1. I can see an element with a corresponding id="timer-label", that contains a string indicating a session is initialized (e.g. "Session").
1. I can see an element with corresponding id="time-left". NOTE: Paused or running, the value in this field should always be displayed in mm:ss format (i.e. 25:00).
1. I can see a clickable element with a corresponding id="start_stop".
1. I can see a clickable element with a corresponding id="reset".
1. When I click the element with the id of reset, any running timer should be stopped, the value within id="break-length" should return to 5, the value within id="session-length" should return to 25, and the element with id="time-left" should reset to it's default state.
1. When I click the element with the id of break-decrement, the value within id="break-length" decrements by a value of 1, and I can see the updated value.
1. When I click the element with the id of break-increment, the value within id="break-length" increments by a value of 1, and I can see the updated value.
1. When I click the element with the id of session-decrement, the value within id="session-length" decrements by a value of 1, and I can see the updated value.
1. When I click the element with the id of session-increment, the value within id="session-length" increments by a value of 1, and I can see the updated value.
1. I should not be able to set a session or break length to <= 0.
1. I should not be able to set a session or break length to > 60.
1. When I first click the element with id="start_stop", the timer should begin running from the value currently displayed in id="session-length", even if the value has been incremented or decremented from the original value of 25.
1. If the timer is running, the element with the id of time-left should display the remaining time in mm:ss format (decrementing by a value of 1 and updating the display every 1000ms).
1. If the timer is running and I click the element with id="start_stop", the countdown should pause.
1. If the timer is paused and I click the element with id="start_stop", the countdown should resume running from the point at which it was paused.
1. When a session countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a break has begun.
1. When a session countdown reaches zero (NOTE: timer MUST reach 00:00), a new break countdown should begin, counting down from the value currently displayed in the id="break-length" element.
1. When a break countdown reaches zero (NOTE: timer MUST reach 00:00), and a new countdown begins, the element with the id of timer-label should display a string indicating a session has begun.
1. When a break countdown reaches zero (NOTE: timer MUST reach 00:00), a new session countdown should begin, counting down from the value currently displayed in the id="session-length" element.
1. When a countdown reaches zero (NOTE: timer MUST reach 00:00), a sound indicating that time is up should play. This should utilize an HTML5 audio tag and have a corresponding id="beep".
1. The audio element with id="beep" must be 1 second or longer.
1. The audio element with id of beep must stop playing and be rewound to the beginning when the element with the id of reset is clicked.

## Calculator

<iframe height="345" style="width: 100%;" scrolling="no" title="FCC: Frontend - Calculator" src="https://codepen.io/ilovepku/embed/oJZVdL?height=340&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ilovepku/pen/oJZVdL'>FCC: Frontend - Calculator</a> by Sean Lee
  (<a href='https://codepen.io/ilovepku'>@ilovepku</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

User Stories

1. My calculator should contain a clickable element containing an = (equal sign) with a corresponding id="equals".
1. My calculator should contain 10 clickable elements containing one number each from 0-9, with the following corresponding IDs: id="zero", id="one", id="two", id="three", id="four", id="five", id="six", id="seven", id="eight", and id="nine".
1. My calculator should contain 4 clickable elements each containing one of the 4 primary mathematical operators with the following corresponding IDs: id="add", id="subtract", id="multiply", id="divide".
1. My calculator should contain a clickable element containing a . (decimal point) symbol with a corresponding id="decimal".
1. My calculator should contain a clickable element with an id="clear".
1. My calculator should contain an element to display values with a corresponding id="display".
1. At any time, pressing the clear button clears the input and output values, and returns the calculator to its initialized state; 0 should be shown in the element with the id of display.
1. As I input numbers, I should be able to see my input in the element with the id of display.
1. In any order, I should be able to add, subtract, multiply and divide a chain of numbers of any length, and when I hit =, the correct result should be shown in the element with the id of display.
1. When inputting numbers, my calculator should not allow a number to begin with multiple zeros.
1. When the decimal element is clicked, a . should append to the currently displayed value; two . in one number should not be accepted.
1. I should be able to perform any operation (+, -, \*, /) on numbers containing decimal points.
1. If 2 or more operators are entered consecutively, the operation performed should be the last operator entered.
1. Pressing an operator immediately following = should start a new calculation that operates on the result of the previous evaluation.
1. My calculator should have several decimal places of precision when it comes to rounding (note that there is no exact standard, but you should be able to handle calculations like 2 / 7 with reasonable precision to at least 4 decimal places).

## Drum Machine

<iframe height="370" style="width: 100%;" scrolling="no" title="FCC: Frontend - Drum Machine" src="https://codepen.io/ilovepku/embed/WLpYRz?height=370&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ilovepku/pen/WLpYRz'>FCC: Frontend - Drum Machine</a> by Sean Lee
  (<a href='https://codepen.io/ilovepku'>@ilovepku</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

User Stories

1. I should be able to see an outer container with a corresponding id="drum-machine" that contains all other elements.
1. Within #drum-machine I can see an element with a corresponding id="display".
1. Within #drum-machine I can see 9 clickable drum pad elements, each with a class name of drum-pad, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.
1. Within each .drum-pad, there should be an HTML5 audio element which has a src attribute pointing to an audio clip, a class name of clip, and an id corresponding to the inner text of its parent .drum-pad (e.g. id="Q", id="W", id="E" etc.).
1. When I click on a .drum-pad element, the audio clip contained in its child audio element should be triggered.
1. When I press the trigger key associated with each .drum-pad, the audio clip contained in its child audio element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string "Q", pressing the W key should trigger the drum pad which contains the string "W", etc.).
1. When a .drum-pad is triggered, a string describing the associated audio clip is displayed as the inner text of the #display element (each string must be unique).

## Random Quote Machine

<iframe height="450" style="width: 100%;" scrolling="no" title="FCC: Frontend - Random Quote Machine" src="https://codepen.io/ilovepku/embed/aPpadW?height=355&theme-id=0&default-tab=js,result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ilovepku/pen/aPpadW'>FCC: Frontend - Random Quote Machine</a> by Sean Lee
  (<a href='https://codepen.io/ilovepku'>@ilovepku</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

User Stories

1. I can see a wrapper element with a corresponding id="quote-box".
1. Within #quote-box, I can see an element with a corresponding id="text".
1. Within #quote-box, I can see an element with a corresponding id="author".
1. Within #quote-box, I can see a clickable element with a corresponding id="new-quote".
1. Within #quote-box, I can see a clickable element with a corresponding id="tweet-quote".
1. On first load, my quote machine displays a random quote in the element with id="text".
1. On first load, my quote machine displays the random quote's author in the element with id="author".
1. When the #new-quote button is clicked, my quote machine should fetch a new quote and display it in the #text element.
1. My quote machine should fetch the new quote's author when the #new-quote button is clicked and display it in the #author element.
1. I can tweet the current quote by clicking on the #tweet-quote a element. This a element should include the "twitter.com/intent/tweet" path in it's href attribute to tweet the current quote.
1. The #quote-box wrapper element should be horizontally centered. Please run tests with browser's zoom level at 100% and page maximized.

## Markdown Previewer

<iframe height="1400" style="width: 100%;" scrolling="no" title="FCC: Frontend - Markdown Previewer" src="https://codepen.io/ilovepku/embed/QzpKNX?height=682&theme-id=0&default-tab=result" frameborder="no" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/ilovepku/pen/QzpKNX'>FCC: Frontend - Markdown Previewer</a> by Sean Lee
  (<a href='https://codepen.io/ilovepku'>@ilovepku</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

---

User Stories

1. I can see a textarea element with a corresponding id="editor".
1. I can see an element with a corresponding id="preview".
1. When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.
1. When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type.
1. When my markdown previewer first loads, the default text in the #editor field should contain valid markdown that represents at least one of each of the following elements: a header (H1 size), a sub header (H2 size), a link, inline code, a code block, a list item, a blockquote, an image, and bolded text.
1. When my markdown previewer first loads, the default markdown in the #editor field should be rendered as HTML in the #preview element.
1. When I click a link rendered by my markdown previewer, the link is opened up in a new tab.
1. My markdown previewer interprets carriage returns and renders them as br (line break) elements.
