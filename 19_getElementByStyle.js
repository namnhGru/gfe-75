/**
 * @param {Element} element
 * @param {string} property
 * @param {string} value
 * @return {Array<Element>}
 */
export default function getElementsByStyle(element, property, value) {
  // return array for each recursion
  const resultArray = [];

  function checkStyle(el) {
    // do nothing if don't have any child
    if (el == null) {
      return;
    }

    // check if parent has this style
    const compStyle = getComputedStyle(el);
    if (compStyle.getPropertyValue(property) === value) {
      resultArray.push(el);
    }
    
    // check if child has this style. child become parent on next recursion
    for (const child of el.children) {
      checkStyle(child);
    }
  }

  for (const child of element.children) {
    checkStyle(child);
  }

  return resultArray;
}
