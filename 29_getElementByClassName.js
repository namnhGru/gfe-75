/**
 * @param {Element} element
 * @param {string} classNames
 * @return {Array<Element>}
 */

// utility function to check if 1 is subset of other
// note that b is the superset
// don't create inside default function because it will get
// created every time the recursion run, not good for memory
function isSubset(a, b) {
    return Array.from(a).every((item) => b.contains(item));
  }
  
  export default function getElementsByClassName(element, classNames) {
    // trim start&end space, split by spaces
    const classNameSet = new Set(classNames.trim().split(/\s+/));
    const resultArray = [];
  
    // inner function that do an effect on outer variable
    function checkEl(el) {
      if (el === null) {
        return;
      }
  
      if (isSubset(classNameSet, el.classList)) {
        resultArray.push(el);
      }
  
      for (let child of el.children) {
        checkEl(child);
      }
    }
  
    for (let child of element.children) {
      checkEl(child);
    }
  
    return resultArray;
  }
  