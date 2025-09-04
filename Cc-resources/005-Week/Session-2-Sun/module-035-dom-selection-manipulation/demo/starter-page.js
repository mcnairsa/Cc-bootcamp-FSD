console.log("Its working");

// grab h1
const h1Element = document.querySelector("h1");

// text Content
h1Element.textContent = "It's Alive!!!!";

// Element, NodeList, HTMLCollection

// NodesLists are returned from the querySelectorAll

// Array.from(NodeList) - to access a single/ node/element

const h2NodeList = document.querySelectorAll("h2");
const h2Array = Array.from(h2NodeList);
h2Array[0].textContent = "I updated the index 0";

// Inner html to update the internals of a element
const aside = document.querySelector("aside");
aside.innerHTML = "<h2>Did this work</h2>";

// create an element that isn't attached in the dom

const divElement = document.createElement("div");
divElement.textContent = "this is our div";

// how do we attach this to something?
//appendChild  - prepend

aside.prepend(divElement);

// insertBefore(2 params)
// removeChild()
// remove()

//setAttribute / getAttribute - https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute
//manipulating a class list - https://developer.mozilla.org/en-US/docs/Web/API/Element/classList\
//classList.toggle()
// modifying styles
