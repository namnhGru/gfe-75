/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
    // check if value type is Array
    if (!Array.isArray(value)) throw new Error("Not an array!");
  
    return value.reduce((acc, curr, idx) => {
      // if current value type is Array
      if (Array.isArray(curr)) {
        // recursively flatten the Array
        const flattedArray = flatten(curr)
        // push flatted result into previous array
        acc.push(...flattedArray)
      } else {
        acc.push(curr);
      }
      return acc;
    }, []);
}
  