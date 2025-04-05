import debounce from "./1_debounce";
console.log("start time")
const debounceLog = debounce(console.log, 1000)
debounceLog("hello world 1st")
debounceLog("hello world 2nd")
debounceLog("hello world 3rd")
debounceLog("hello world 4th")

import myReduce from "./2_myReduce";
console.log([1, 2, 3].myReduce((acc, cur) => acc + cur, 0));

import classNames from "./3_className"
console.log(classNames(null, false, 'bar', undefined, { baz: null }, ''))