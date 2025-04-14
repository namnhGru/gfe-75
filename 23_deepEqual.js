/**
 * @param {*} valueA
 * @param {*} valueB
 * @return {boolean}
 */
export default function deepEqual(valueA, valueB) {
    // base case
    if (Object.is(valueA, valueB)) return true;
  
    // if array, check every value in the array
    if (Array.isArray(valueA) && Array.isArray(valueB)) {
      if (valueA.length === valueB.length) {
        return valueA.every((item, idx) => {
          return deepEqual(item, valueB[idx]);
        });
      }
    }
  
    // if object, check every keys are the same, then check every values
    if (valueA?.constructor === Object && valueB?.constructor === Object) {
      if (deepEqual(Object.keys(valueA), Object.keys(valueB))) {
        return Object.keys(valueA).every((key, idx) => {
          return deepEqual(valueA[key], valueB[key]);
        });
      }
    }
  
    return false;
  }
  