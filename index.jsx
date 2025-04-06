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


import {createRoot} from 'react-dom/client'
import React from 'react'
import Todo from "./6_todoList/Todo";
import ContactForm from "./7_contactForm/ContactForm";
import HolyGrail from "./8_holyGrail/HolyGrail";
import Tabs from "./9_tabs/Tabs";


const root = createRoot(document.getElementById('root'))

root.render(
    <>
        {/* <Todo /> */}
        {/* <ContactForm /> */}
        {/* <HolyGrail /> */}
        <Tabs />
    </>
)