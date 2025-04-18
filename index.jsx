// import debounce from "./1_debounce";
// console.log("start time")
// const debounceLog = debounce(console.log, 1000)
// debounceLog("hello world 1st")
// debounceLog("hello world 2nd")
// debounceLog("hello world 3rd")
// debounceLog("hello world 4th")

// import myReduce from "./2_myReduce";
// console.log([1, 2, 3].myReduce((acc, cur) => acc + cur, 0));

// import classNames from "./3_className"
// console.log(classNames(null, false, 'bar', undefined, { baz: null }, ''))

// import flatten from "./4_myFlat";
// console.log(flatten([1,2,[3,[4],5,[6,[7,[8]],9]]]))

// import throttle from "./5_throttle"
// const throttleLog = throttle((a,b) => console.log(a+b), 10)
// throttleLog(1,3)

// import EventEmitter from "./18_eventEmitter";
// const eventEmitter = new EventEmitter()
// eventEmitter.on("event", (a, b) => console.log(a, b)).on("event", (a, b) => console.log(a, b))
// const newEv = eventEmitter.off("event", (a, b) => console.log(a, b))
// console.log(newEv)

import getElementsByStyle from './19_getElementByStyle';

function createElementFromHtmlString(htmlString) {
  // Use `document.createElement()` because jsdom@16 has some issues with `getComputedStyle()`
  // with elements created using `DOMParser().parseFromString()`.
  const div = document.createElement('div');
  div.innerHTML = htmlString.trim(); // Trimming to avoid any leading whitespace nodes.
  return div;
}

const doc = createElementFromHtmlString(
    `<div>
          <span style="font-size: 12px">Span</span>
          <p>Paragraph</p>
          <div></div>
        </div>`
  );

  getElementsByStyle(doc, 'font-size', '12px');


import {createRoot} from 'react-dom/client'
import React from 'react'
import Todo from "./6_todoList/Todo";
import ContactForm from "./7_contactForm/ContactForm";
import HolyGrail from "./8_holyGrail/HolyGrail";
import Tabs from "./9_tabs/Tabs";
import JobBoard from "./10_jobBoard/JobBoard";
import Accordion from './11_accordion/Accordion';


const root = createRoot(document.getElementById('root'))

root.render(
    <>
        {/* <Todo /> */}
        {/* <ContactForm /> */}
        {/* <HolyGrail /> */}
        {/* <Tabs /> */}
        {/* <JobBoard /> */}
        {/* <Accordion /> */}
    </>
)