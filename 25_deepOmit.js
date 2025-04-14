/**
 * @param {any} val
 * @param {Array<string>} keys
 * @returns any
 */
export default function deepOmit(val, keys) {
    // array type
    if (Array.isArray(val)) {
      // return an array with all item is deep omitted
      // this will help in case of nested array
      return val.map((item) => deepOmit(item, keys));
    }
  
    // object type
    // return new object that includes only non-omitted key-value pair
    if ((val !== null) & (typeof val === "object")) {
      return Object.keys(val).reduce((acc, curr) => {
        if (!keys.includes(curr)) {
          acc[curr] = deepOmit(val[curr], keys);
        }
        return acc;
      }, {});
    }
  
    // primitive type, return itself
    return val;
  }
  